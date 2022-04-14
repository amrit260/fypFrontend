import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setBookings } from 'src/redux/bookings/bookingAction'
import getItems from 'src/utils/tourRequests/getItems'
import TotalRatings from './totalReview'
import ReviewList from './reveiewList'
import ReviewForm from './formReview'
import { serverURL } from 'src/config'

const Review = ({reviews,avgRating,totalRating,tour})=>
{
    let dispatch = useDispatch()
    let bookings = useSelector(state=>state.bookings);
    let user = useSelector(state=>state.auth.user)
    const [review,setReview]= useState(reviews)

    const setReviews=()=>{
        axios
        .get(`${serverURL}/api/v1/tours/${tour}`)
        .then((res) => {
            if (res.status = 'success') {

                setReview(res.data.data.data.reviews)



            }




        })
        .catch((err) => {
            console.log(err)
        });
    }

    useEffect(async() => {

        if (bookings.length==0 && user){
        let res = await getItems('bookings',`${serverURL}/api/v1/bookings/myBookings`)
        if(res){
            console.log(res)
            dispatch(setBookings(res))
        }}
         

    },[])

    const canReview = ()=>{
        if(bookings.length !=0){
           
            return bookings[0].tour.id === reviews[0].tour
        }
        
        return false
    }



    
    return <Grid container sx={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start', marginTop:'10px',paddingLeft:'20%',paddingRight:'5%'} } spacing={5} >
        <Grid item xs={12} md={12}>

     <TotalRatings avgRating={avgRating} totalRating={totalRating}/>
            
        </Grid>
        <Grid item xs={12} md={12}>

        <ReviewList reviews={review} setReviews={setReviews}></ReviewList>

        </Grid>
        <Grid item xs={12} md={12}>

        {canReview()?<ReviewForm setReviews={setReviews} tour={tour}></ReviewForm>:null }

        </Grid>
     </Grid>  
}
export default Review