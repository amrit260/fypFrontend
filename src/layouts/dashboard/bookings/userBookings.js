import { Avatar, Grid, Paper, Typography,Alert,AlertTitle } from "@mui/material"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import Iconify from "src/components/Iconify"
import { serverURL } from "src/config"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookingCard from "./bookingCard";
import { setBookings } from "src/redux/bookings/bookingAction";
import getItems from "src/utils/httpRequests/getItems"





export default function UserBookings() {
    let dispatch = useDispatch()
    let bookings =[];
    useEffect(async() => {

        if (bookings.length==0){
        let res = await getItems('bookings',`${serverURL}/api/v1/bookings/myBookings`)
        if(res){
            console.log(res)
            dispatch(setBookings(res))
        }}
         

    })
    console.log(bookings)
    bookings =  useSelector(state => state.bookings)
    // {alert(bookings)}
     
    return (
        // <Paper elevation={3}>
        <Grid direction="column"
            justifyContent="center"
            sx={{ padding: '20px' }} container spacing={0}>
            
                <Typography color="textSuccess" variant="h5">
                    Your Bookings
                </Typography>
               
               { bookings.length==0 ?
                    <Alert severity="info">
                <AlertTitle>Bookings not found</AlertTitle>
  Your bookings will appear here   — <strong>after booking a tour!</strong>
</Alert>
                :<BookingCard  booking={bookings[0]}/>}
                
           

          
        </Grid>
        // </Paper>
    )
}