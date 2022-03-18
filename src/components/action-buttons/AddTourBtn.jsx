import { useState } from "react";
import { Button, Dialog, DialogTitle } from '@mui/material';
import TourForm from "src/sections/@dashboard/tours/tourForm";
import AddIcon from '@mui/icons-material/Add';

const AddTourBtn = ({ tour }) => {





    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };







    return <><Button color='success' endIcon={<AddIcon />} onClick={handleClickOpen} >Add Tour</Button>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add a newtour</DialogTitle>
            <TourForm tour={tour} handleClose={handleClose} actionType='add tour'></TourForm>

        </Dialog></>





}

export default AddTourBtn;