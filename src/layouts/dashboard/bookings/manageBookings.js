import { Avatar, Grid, Paper, Typography,Alert,AlertTitle } from "@mui/material"
import { useSelector,useDispatch } from "react-redux"
import Iconify from "src/components/Iconify"
import { useEffect } from "react"
import { serverURL } from "src/config"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookingCard from "./bookingCard";
import { setBookings } from "src/redux/bookings/bookingAction";
import getItems from "src/utils/httpRequests/getItems"
import BookingList from "./bookingList"



export default function ManageBookings() {
    let dispatch = useDispatch()
    let bookings =[];
    useEffect(async() => {

        if (bookings.length==0){
        let res = await getItems('bookings',`${serverURL}/api/v1/bookings/`)
        if(res){
            console.log(res)
            dispatch(setBookings(res))
        }}
         

    })
    console.log(bookings)
    bookings =  useSelector(state => state.bookings)
 
    return (
        // <Paper elevation={3}>
        <Grid direction="row"
            justifyContent="center"
            sx={{ padding: '20px' }} container spacing={0}>
                
            
              
{ bookings.length==0 ?
                    <Alert severity="info">
                <AlertTitle>Bookings not found</AlertTitle>
  Your bookings will appear here   — <strong>after booking a tour by users!</strong>
</Alert>
                :<BookingList bookings={bookings}/>}
            

          
        </Grid>
        // </Paper>
    )
}