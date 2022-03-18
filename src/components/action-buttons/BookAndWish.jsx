import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { AddWishItem, hideOrShowWishlist } from '../../redux/wishList/wishListActions'
import { toast } from 'react-toastify';




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

const BookButton = ({ item }) => <Button color="secondary" >Book Now</Button>

const BookAndWishBtns = ({ item }) => (<ButtonGroup>
    <AddToWishListButton item={item} />
    <BookButton item={item} />
</ButtonGroup>)


export default BookAndWishBtns;



