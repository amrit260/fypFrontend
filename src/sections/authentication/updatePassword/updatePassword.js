import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import updateItem from 'src/utils/httpRequests/updateItem';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { login } from 'src/redux/auth/authAction';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { serverURL } from 'src/config';

// ----------------------------------------------------------------------

export default function UpdatePasswordForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting,setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth);
  
  


  const LoginSchema = Yup.object().shape({
    passwordCurrent: Yup.string().min(8, 'Too Short!').max(70, 'Too Long!').required('Required'),
    password: Yup.string().min(8, 'Too Short!').max(70, 'Too Long!').required('Required'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      passwordCurrent: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: LoginSchema,
    onSubmit:async (user) => {
      const res = await updateItem('Password',`${serverURL}/api/v1/users/updateMyPassword`,user)
      if(res){
        toast.success('password changed successfully',{
          position:toast.POSITION.TOP_CENTER
        })
      }
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        }, 2000);

      
    }
  });

 
      
      

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Box sx={{padding:'20px'}}>
                  <Typography sx={{ marginTop: '10px', marginBottom: '10px' }} variant="h6" color="primary">Change password</Typography>
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="current-password"
            type="password"
            label="Current Password"
            {...getFieldProps('passwordCurrent')}
            error={Boolean(touched.passwordCurrent && errors.passwordCurrent)}
            helperText={touched.passwordCurrent && errors.passwordCurrent}
          />

          <TextField
            fullWidth
             
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            fullWidth
            type='password'
             label=" Confirm password"
            {...getFieldProps('passwordConfirm')}
             
            error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
          />
        </Stack>

         

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
           sx={{marginTop:'15px'}}
          loading={isSubmitting}
        >
          submit
        </LoadingButton>
      </Form>
    </FormikProvider>
    </Box>
  );
}
