import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BookAndWishBtns from '../../components/action-buttons/BookAndWish'
import axios from 'axios'
import './tourPageStyles.css'
import Page from 'src/components/Page'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


import { serverURL } from 'src/config'
import Maps from 'src/components/maps'


const TourPage = (props) => {

    const [tour, setTour] = useState(null)

    const { tourID } = useParams()

    const progressBarStyles = {


        marginTop: '25vh',
        marginBottom: '25vh',
        marginLeft: '45vw',

    }


    useEffect(() => {

        axios
            .get(`${serverURL}/api/v1/tours/${tourID}`)
            .then((res) => {
                if (res.status = 'success') {

                    setTour(res.data.data.data)


                }




            })
            .catch((err) => {
                console.log(err)
            });

    }, [])













    if (!tour) return <Box style={progressBarStyles} sx={{ width: '100vw' }}>
        <CircularProgress />
    </Box>


    console.log('this is tour')
    console.log(tour)
    return <Page title={`${tour.name.toUpperCase()} | Explore Nepal`}> <div className="tour-page">{window.scrollTo(0, 0)}
        <div className="tour-banner">

            <div className="banner-content">
                <h5 className='banner-content-title text-capitalize'>{tour.name}</h5>

                <div className="tour-fact-list">

                    <div> <span className="text-secondary display-5">Duration : </span> <span className='text-dark'>  {tour.duration} Days</span> </div>
                    <div> <span className="text-secondary display-5">Category : </span> <span className='text-dark'>  {tour.category}</span> </div>

                </div>
                <div className="tour-fact-list">
                    <div> <span className="text-secondary display-5">Difficulty : </span> <span className='text-dark'>  {tour.difficulty}</span> </div>

                    <div> <span className="text-secondary display-5">Max members : </span> <span className='text-dark'>  {tour.maxGroupSize} </span> </div>

                </div>
                <div className="tour-fact-list">
                    <div> <span className="text-secondary display-5">Price : $</span> <span className='text-dark'>  {tour.price}</span> </div>
                    <div> <span className="text-secondary display-5">Rating : </span> <span className='text-dark'>  {tour.ratingsAverage}</span> </div>


                </div>


                <div className="tour-fact-list">

                    {/* <div> <span className="text-secondary display-5">Lead Guide : </span> <span className='text-dark'>  {tour.guides[0].name}</span> </div> 
                   <div> <span className="text-secondary display-5">Tour Guide : </span> <span className='text-dark'>  {tour.guides[0].name}</span> </div>  */}

                </div>
                <BookAndWishBtns item={tour}></BookAndWishBtns>





            </div>
            <div className="banner-image-parent">
                <div className="banner-image" style={{ backgroundImage: `url('${serverURL}/img/tours/${tour.images[0]}')` }}></div></div>
        </div>


        <div className="tour-images">

            {tour.images.map((image, index) => {
                if (index >= 3) return;
                return <div className="tour-img">
                    <img src={`${serverURL}/img/tours/${image}`} alt="" />
                </div>
            })}






        </div>


        <Maps />



        <div className="tour-banner about-tour">

            <div className=" about-tour-image" style={{ backgroundImage: `url('${serverURL}/img/tours/${tour.images[tour.images.length - 1]}')` }}></div>

            <div className="banner-content about-tour-content">
                <h5 className='banner-content-title text-capitalize'>About {tour.name}</h5>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in obcaecati eaque non tenetur explicabo blanditiis assumenda saepe corporis a!</p>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in obcaecati eaque non tenetur explicabo blanditiis assumenda saepe corporis a!</p>

            </div>



        </div>


    </div>
    </Page>
}

// const tour = (state)=> {



//     return ({tours:state.tours});

// }


export default TourPage