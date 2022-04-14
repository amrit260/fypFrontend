
import { useSelector } from "react-redux";
import { Avatar, CardContent,Card,CardMedia, CardHeader, Grid, Typography,Button,Box,Paper } from "@mui/material"
import { useDispatch } from "react-redux";
import { serverURL } from "src/config"
import Label from '../../../components/Label';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send'
import AddItem from "src/utils/tourRequests/addTours";
import { setBookings } from "src/redux/bookings/bookingAction";
import VerifyButton from "./verifyBtn";


export default function BookingDetail({booking}) {

  const user = useSelector(state=>state.auth.user)
  
  let status = booking.verified?'verified':'not verified'
 
    const containerStyles = {display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'column'}

    return <Grid container direction='row' > 
               {/* left side of container */}
        
         <Grid item xs={6}>
         <Grid container  sx={{padding:'10px'}}  spacing={3} >
           
           <Grid item xs={12}  sx={containerStyles}>
             
           <Typography  >{booking.tour.name}</Typography>
           
      <Paper variant="outlined">
       <img src={`${serverURL}/img/tours/${booking.tour.images[0]}`} />
    </Paper>

           </Grid>
           {/* <Grid item xs={12}  sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', }}>
             <Paper variant="outlined"  sx={{padding:'5px'}}>
           <Typography color='primary' align='center' fullwidth  variant="subtitle1">Tour Guides</Typography>
           
           
      
       <Grid container  spacing={3}>
         <Grid item xs = {4}>
         <Avatar alt="Remy Sharp" src= {`${serverURL}/img/tours/${tour.images[0]}`} />
           </Grid>
           <Grid item xs = {8}>
             <Typography>Amrit Sharma</Typography>
             <Typography>adkajfd@gmail.com</Typography>
             </Grid>
         </Grid>
    </Paper>

           </Grid> */}
         
           
            </Grid>
         
           </Grid>
           {/* right side of container */}
         <Grid item xs={6}>
         <Grid container spacing={2} >
          

           
           <Grid  sx={containerStyles} item xs={12}>
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
           <Avatar alt="Remy Sharp" src= {`${serverURL}/img/users/${booking.user.photo}`} />
            <Typography variant='subtitle2'> Booked By: {booking.user.name}</Typography>
            <Typography paragraph><EmailIcon fontSize='small' color='primary'/> {user.email}</Typography>


           </Grid>
         <Grid sx={{padding:'20px'}} rowSpacing={3} item xs={12}>
           <Paper variant='outlined' sx={{padding:'10px'}}>

         <Typography align='left' variant='h6' color='primary'> Tour Details<Label align='right' sx={{marginBottom:'5px',float:'right'}} label='Tour Date' color='secondary'  >Price : ${booking.tour.price} </Label></Typography>
         
         <Typography  paragraph>Tour duration : {booking.tour.duration} days </Typography>
         {/* <Typography  paragraph>Start Location : {booking.tour.startLocation.address} </Typography> */}
         {/* <Typography  paragraph>Start Dates :  {booking.tour.startDates[0]}  </Typography> */}

          <Label sx={{marginBottom:'5px'}} label='Tour Date'  >Quick description </Label>
          <Typography align='center'>{booking.tour.summary}</Typography>
          
         {user.role === 'admin'?<VerifyButton booking={booking}/>:null}
          
           </Paper>
           </Grid>
            </Grid>
         
           </Grid>
   




    </Grid>

}