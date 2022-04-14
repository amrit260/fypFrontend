import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup, Dialog, DialogTitle, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { AddWishItem, hideOrShowWishlist } from '../../redux/wishList/wishListActions'
import { toast, useToast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BookingForm from 'src/layouts/dashboard/bookings/bookingForm';




const AddToWishListButton = ({ item }) => {


    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(AddWishItem(item));
        toast.success('Added to wishlist', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        // dispatch(hideOrShowWishlist());
    }




    return <Button startIcon={<AddShoppingCartRoundedIcon />} color="primary" onClick={handleClick} >Add to wishlist</Button>


}

const BookButton = ({ tour }) => {
    const [bookingDialogStatus, handleBookingDialog] = useState(false)
    const isLoggedIn = useSelector((state) => state.auth.loggedIn)
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate()

    const handleClickOpen = () => {
        if (!isLoggedIn) {
            toast.info('Please login to book a tour', {
                position: toast.POSITION.TOP_CENTER
            })
            return navigate('/auth/login')


        }
        handleBookingDialog(true)
    }

    return <><Button onClick={handleClickOpen} color="secondary" >Book Now</Button>

        <Dialog maxWidth='md' fullWidth={true} onClose={() => {
            handleBookingDialog(false)
        }} open={bookingDialogStatus}>
            <DialogTitle ><Typography align="center" color='primary'  >Booking Details</Typography></DialogTitle>

            <BookingForm tour={tour} user={user} />


        </Dialog></>
}

const BookAndWishBtns = ({ tour }) => (<ButtonGroup>
    <AddToWishListButton item={tour} />
    <BookButton tour={tour} />

</ButtonGroup>


)


export default BookAndWishBtns;



