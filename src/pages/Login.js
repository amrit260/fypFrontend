import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { LoginForm } from '../sections/authentication/login';
 
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));







// ----------------------------------------------------------------------

export default function Login() {

  


  return (
    <RootStyle title="Login | Explore Nepal">
     

      <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h3"   sx={{ px: 5, mt: 10, mb: 5 }}>
          Hi, Welcome Back
        </Typography>
        <img src="/static/illustrations/illustration_login.png" alt="login" />
      </SectionStyle>
       

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              LOGIN TO EXPLORE NEPALi
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>For testing</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Email : admin@gmail.com</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Password : admin123</Typography> */}
          </Stack>

          <LoginForm />

          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 3,
              display: { sm: 'none' }
            }}
          >
           
          </Typography>
        </ContentStyle>
      </Container>
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none"   variant="subtitle2" component={RouterLink} to="/auth/register">
          Get started
        </Link>
      </AuthLayout>
    </RootStyle>
  );
}
