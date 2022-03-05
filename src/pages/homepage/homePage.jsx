import React, { useState, useEffect } from 'react'
import CallToAction from '../../components/CallToAction/callToAction'
import Caurosel from '../../components/Caurosel/cauroselComponent'
import PopularTours from '../../components/popular/popularTours'
import TourComponent from '../../components/Tour/tourComponent'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeBanner from '../../components/welcome/welcomeBanner.component'
import { setTours } from 'src/redux/tours/tourActions'
import axios from 'axios'



const HomePage = () => {


   const dispatch = useDispatch()
   const [tours, setToursOnThisPage] = useState([]);
   useEffect(() => {
      axios
         .get(`http://127.0.0.1:3000/api/v1/tours`)
         .then((res) => {
            console.log("tours below")
            console.log(res);
            if ((res.status = 'success')) {
               // setTours(res.data.data);
               dispatch(setTours(res.data.data))
               // setToursOnThisPage()
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);




   return <React.Fragment> {window.scrollTo(0, 0)}
      <WelcomeBanner />
      <CallToAction />
      <TourComponent tourCount='3' />
      <Caurosel />
      <PopularTours key='homepage-popular-tours' />

   </React.Fragment>

}

export default HomePage