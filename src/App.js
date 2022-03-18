import { useEffect, useState } from 'react';
import axios from 'axios';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { useDispatch } from 'react-redux';
import { setTours } from './redux/tours/tourActions';
import getItems from './utils/tourRequests/getItems';
import { serverURL } from './config';
// ----------------------------------------------------------------------




export default function App() {
const dispatch = useDispatch()
let tours;
useEffect(async () => {

  tours = await getItems('tours', `${serverURL}/api/v1/tours`)
   
  
   dispatch(setTours(tours))

   // setToursOnThisPage()
}


   , []);

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
