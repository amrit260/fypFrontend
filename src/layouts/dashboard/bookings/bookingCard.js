
import { useState } from "react";
import { Avatar, CardContent,Card,CardMedia, CardHeader, Grid, Typography,Button,Dialog,DialogTitle } from "@mui/material"
import { useSelector } from "react-redux";
import { serverURL } from "src/config"
import authReducer from "src/redux/auth/authReducer";
import Label from '../../../components/Label';
import BookingDetail from "./bookingDetail";

export default function bookingCard({booking}) {
    console.log(booking)
    console.log(serverURL)
    let status = booking.verified?'verified':'not verified'
    const [bookingDialogStatus, handleBookingDialog] = useState(false)
    const handleClick = () => {
       
      handleBookingDialog(true)
       
  }

    return <Grid item xs={4} md={4}>
         
        <Card raised sx={{ maxWidth: 345, minWidth: 345,padding:'10px',backgroundColor:'aliceblue' }}>
            <CardHeader avatar={<Avatar alt={`${booking.user.name}`} src={`${serverURL}/img/users/${booking.user.photo}`} />} title={`${booking.user.name}`} 
                subheader={`Booked on : ${new Date(booking.createdAt).toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
                replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')}`} >
            </CardHeader>
            <Label
            variant="outlined"
            color={(status === 'not verified' && 'error') || 'success'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
            <CardMedia
        component="img"
        height="194"
        image={`${serverURL}/img/tours/${booking.tour.images[0]}`}
        alt="Paella dish"
        rounded
      />
        <CardContent>
          
                    <Typography sx={{marginBottom:'5px'}} variant="body2" color="textSecondary" component="p">
                        Tour Name : {booking.tour.name}
                    </Typography>


                    <Dialog maxWidth='md' fullWidth={true} onClose={() => {
            handleBookingDialog(false)
        }} open={bookingDialogStatus}>
            <DialogTitle ><Typography align="center" color='primary'  >Booking Details</Typography></DialogTitle>

           
            <BookingDetail booking = {booking}></BookingDetail>


        </Dialog>
           <Button variant='outlined' onClick={handleClick} fullWidth>More details</Button>
                    
        </CardContent>
        </Card >
    </Grid>

}