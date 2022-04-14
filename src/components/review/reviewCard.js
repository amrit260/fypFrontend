import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Grid, Typography,Paper,Avatar,Rating,Box,Button,Dialog,DialogTitle } from '@mui/material'
import { serverURL } from 'src/config'
import CloseIcon from '@mui/icons-material/Close';
import deleteItem from 'src/utils/httpRequests/deleteItem'
import Label from '../Label'
import './reviewCard.css'


const ReviewCard = ({review,setReviews})  =>{
    const user = useSelector(state=>state.auth.user)
    const canDelete = user?.role === 'admin' || user?.id === review.user.id;
    const [dialogOpen,setDialogOpen] = useState(false);

    const handleDelete = async () => {
        let isDeleted = await deleteItem('Review',`${serverURL}/api/v1/reviews/${review._id}`)
        if(isDeleted){
            setReviews()
            setDialogOpen(false)
            toast.success('Review deleted',{
                position:toast.POSITION.BOTTOM_RIGHT
            })
        }
    }


    const handleClose = ()=>{
        setDialogOpen(false)
        alert('clicked')
    }
   

    return <Grid item xs={12} ><Paper   sx={{padding:'50px'}} variant='outlined' fullWidth>
        
        {user?.role==='user' && canDelete ?  <Label align='right' sx={{marginBottom:'5px',float:'left'}} label='Tour Date' color='secondary'  >my review</Label>:null}
       {canDelete ?<Box onClick={()=>setDialogOpen(true)}  sx={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
            
             <Button startIcon={<CloseIcon/>}></Button>
        </Box>:null} 

        

        
        <Grid container spacing={3}>


        <Grid item sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}} xs={12}><Avatar alt="Remy Sharp" src= {`${serverURL}/img/users/${review.user.photo}`} /> 
            <Label sx={{marginLeft:'5px'}}> {review.user.name}</Label>
            <Rating name="read-only" value={review.rating} readOnly />
            </Grid>
        <Grid item xs={12}>
            <Typography paragraph >{review.review}</Typography>
            </Grid>

        
            


    </Grid></Paper>
    <Dialog maxWidth='md' fullWidth={true} onClose={handleClose} open={dialogOpen}>
            <DialogTitle >Do you really want to remove this review</DialogTitle>

                <Button color='error' onClick={handleDelete}>Remove</Button>
                <Button color='success' onClick={handleClose}>Cancel</Button>


        </Dialog>
    </Grid>
}

export default ReviewCard