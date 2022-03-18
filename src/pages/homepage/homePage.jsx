import React, { useState, useEffect } from 'react'
import CallToAction from '../../components/CallToAction/callToAction'
import Caurosel from '../../components/Caurosel/cauroselComponent'
import PopularTours from '../../components/popular/popularTours'
import TourComponent from '../../components/Tour/tourComponent'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeBanner from '../../components/welcome/welcomeBanner.component'
import { setTours } from 'src/redux/tours/tourActions'
import axios from 'axios'
import Page from 'src/components/Page'
import { serverURL } from 'src/config'
import getItems from 'src/utils/tourRequests/getItems'



const HomePage = () => {






   return <React.Fragment> {window.scrollTo(0, 0)}
      <Page title="Homepage | Explore Nepal">
         <WelcomeBanner />
         <CallToAction />
         <TourComponent tourCount='3' />
         <Caurosel />
         <PopularTours key='homepage-popular-tours' />
      </Page>
   </React.Fragment>
}

export default HomePage