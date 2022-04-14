import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Dialog,
  DialogTitle
} from '@mui/material';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { login } from 'src/redux/auth/authAction';
import ForgotPassword from '../resetPassword/forgotPassword';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting,setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth);
  const [open,setOpen] = useState(false);
  
  


  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (user) => {
      dispatch(login(user));
      setSubmitting(true);
      if(users.loggedIn){
        navigate(`${user.role ==='admin'?'/dashboard/app':'/dashboard/myaccount'}`, { replace: true });
      }
      setTimeout(() => {
        setSubmitting(false);
        }, 2000);

      
    }
  });

  useEffect(() => {
    if (users.loggedIn) {
      navigate('/dashboard/myaccount', );
      }
      }, [users.loggedIn]);
      
      
      

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
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
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} onClick={()=>setOpen(true)} style={{color:'#007bff'}} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
          <Dialog onClose={()=>setOpen(false)} open={open}>
             
          <ForgotPassword/>

        </Dialog>

        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
           
          loading={isSubmitting}
        >
          Loginoo
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
