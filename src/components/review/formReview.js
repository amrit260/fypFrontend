import { useState } from 'react';
import {Paper,Typography,Rating,TextField,Box,Button} from '@mui/material'
import AddBooking from 'src/utils/httpRequests/postItem';
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';

const ReviewForm =({tour,setReviews})=>{

    const [value,setValue] = useState(0);
    const [review,setReview] = useState('')

    const handleSubmit = async ()=>{
       const res = await AddBooking('Review',`${serverURL}/api/v1/reviews`,{rating:value,review,tour});
       if(res){
           toast.success('review submitted',{
             position:toast.POSITION.BOTTOM_RIGHT
           })
           setReviews() // refresh
           setReview('')
           setValue(0)
       }
    }

    const handleChange = (e)=>{
       
        setReview(e.target.value)
        
            
    }

    return <Paper variant='outlined' sx={{padding:'10px'}}>
    <Typography >Leave a review</Typography>
    {/* <Typography align='center' variant='h6'>{avgRating}</Typography> */}
    <Typography align='center' variant='h6'><Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /></Typography>
    
    <TextField value={review} onChange={handleChange} placeholder='write a review' fullWidth variant='standard'></TextField> 
    <Box sx={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end',marginTop:'5px'}}>
        <Button onClick={handleSubmit} variant="outlined">Submit</Button> </Box>
    

</Paper>
}

export default ReviewForm