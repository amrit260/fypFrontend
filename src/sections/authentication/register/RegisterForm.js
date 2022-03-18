import * as Yup from 'yup';
import { useState,useEffect } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, alertTitleClasses } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { signUp } from 'src/redux/auth/authAction';
import { useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const dispatch = useDispatch()
 const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {


        navigate(`/dashboard/app`);
    }

})


  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().min(8,'enter the min of 8 characters').max(15,'password should not contain more than 15 characters').required('Password is required!'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'passwords not matching').required('Confirm password is required')
  });

  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      password: '',
      passwordConfirm:''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      
   
        setSubmitting(true)
         dispatch(signUp(values))
         if(localStorage.getItem('loggedIn')){
          navigate('/dashboard/app', { replace: true });
        }
         
         setTimeout(() => {
            setSubmitting(false)
         }, 1000);
        
      
      
       
       
     
    }
  });
  
  // console.log(formik)
  
  
  const { errors, touched, handleSubmit,  getFieldProps } = formik;
  
 
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Full Name"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />

          </Stack>

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
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
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
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="passwordConfirm"
            {...getFieldProps('passwordConfirm')}
             
            error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
          />

          <LoadingButton
            fullWidth
            size="large"
            
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
