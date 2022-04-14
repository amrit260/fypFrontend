import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Dialog, DialogTitle, Typography } from '@mui/material';
import updateItem from 'src/utils/tourRequests/updateItem';
import { serverURL } from 'src/config';
import updateBooking from 'src/utils/tourRequests/updateBooking';
import getItems from 'src/utils/tourRequests/getItems';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { setBookings } from 'src/redux/bookings/bookingAction';

const VerifyButton =  ({ booking }) => {
   const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick =async () => {
       

           
    
    
        
      let res = await updateBooking("Booking",`${serverURL}/api/v1/bookings/${booking._id}`,{verified:!booking.verified})
      if(res){
          toast.success(res.verified?'Booking verified':"Booking unverified",{
              position:toast.POSITION.TOP_CENTER
          })
          

           res = await getItems('bookings',`${serverURL}/api/v1/bookings/`)
          if(res){
              dispatch(setBookings(res))
              
          }
      }
     

    }

    return<Button onClick={handleClick} color="secondary" >{booking.verified?'unverify':'verify'}</Button>

        
}

export default VerifyButton