import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import postItem from 'src/utils/httpRequests/postItem';
// material
import {
 Alert,
 AlertTitle,
  Stack,
  
  TextField,
  IconButton,
  InputAdornment,
  Typography
} from '@mui/material';
 
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { login } from 'src/redux/auth/authAction';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { serverURL } from 'src/config';
import { useLocation, useParams } from 'react-router';

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  const [isSubmitting,setSubmitting] = useState(false);
    const [submitted,setSubmitted] = useState(false);
  
 

  const LoginSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      
      email:''
    },
    validationSchema: LoginSchema,
    onSubmit:async (user) => {

      setSubmitting(true);
      const res = await postItem('Forgot Password',`${serverURL}/api/v1/users/forgotPassword`,user)
      if(res){
        toast.success('reset token sent to your email',{
          position:toast.POSITION.TOP_CENTER
          
        })

        setSubmitted(true)
      }
      
      setTimeout(() => {
        setSubmitting(false);
        }, 2000);

      
    }
  });

 
      
      

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  if(submitted){
      return <Alert className="card" severity="info">
      <AlertTitle>Reset token has been sent to your email</AlertTitle>
Click on the reset link   — <strong>to reset your password!</strong>
</Alert>
  }
  else if(isSubmitting){
  return  <Alert className="card" severity="info">
  <AlertTitle>Sending email...</AlertTitle>
Please wait   — <strong>!</strong>
</Alert>
}
  else{
  return (
      
    <Box sx={{padding:'20px'}}>
                  <Typography sx={{ marginTop: '10px', marginBottom: '10px' }} variant="h6" color="primary">Reset password</Typography>
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
       

          <TextField
            fullWidth
             variant='standard'
            type={'email'}
            label=" Enter your email"
            {...getFieldProps('email')}
 
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
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
          Send reset Token
        </LoadingButton>
      </Form>
    </FormikProvider>
    </Box>
  )}
}
