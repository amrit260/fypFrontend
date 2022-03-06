// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  toast.configure()
const navigate = useNavigate();
let loggedIn = useSelector(state => state.auth.loggedIn);
let user = useSelector(state => state.auth.user)
let state = null;


useEffect(() => {
  
// setLoggedIn(useSelector(state => state.auth.loggedIn))
// setUser(useSelector(state => state.auth.user))

   if(!loggedIn){
     toast.error('please login to continue to dashboard',{position:toast.POSITION.BOTTOM_RIGHT})
     navigate('/auth/login', { replace: true });
   }

  }, []);


  console.log(useSelector(state => state))
  
 
 
  
   
  
  

  return (
    <Page title="Dashboard | Explore Nepal">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi {`${user.name ? user.name.toUpperCase(): ''}`}!</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppConversionRates /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentSubject /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppNewsUpdate /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppOrderTimeline /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTrafficBySite /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppTasks /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
