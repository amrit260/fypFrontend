import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, ButtonGroup } from '@mui/material';
import toaster from 'react-toastify'
import deleteItem from 'src/utils/httpRequests/deleteItem';
import { serverURL } from 'src/config';
import getItems from 'src/utils/httpRequests/getItems';
import { setTours } from 'src/redux/tours/tourActions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TourForm from '../../sections/@dashboard/tours/tourForm';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const btnStyles = {
    padding: '10px',
    dispaly: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const DeleteTourBtn = ({ tourID }) => {


    // const [tours, setTours] = useState([]);

    // const dispatch = useDispatch();
    const dispatch = useDispatch();

    // function SimpleDialog(props) {
    //     const { onClose, open } = props;

    //     const handleClose = () => {
    //         onClose(false);
    //     };



    //     return (

    //     );
    // }

    // SimpleDialog.propTypes = {
    //     onClose: PropTypes.func.isRequired,
    //     open: PropTypes.bool.isRequired,
    //     selectedValue: PropTypes.string.isRequired,
    // };
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };


    const handleClick = async () => {
        handleClose();
        let tours;
        let isDeleted = await deleteItem('Tour', `${serverURL}/api/v1/tours/${tourID}`);

        if (isDeleted) {
            tours = await getItems('tours', `${serverURL}/api/v1/tours`);
            dispatch(setTours(tours));

        }
        dispatch(setTours(tours));


    }




    return <><Button color='error' key={tourID} startIcon={<DeleteIcon />} onClick={handleClickOpen} >Delete</Button>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Delete this tour</DialogTitle>
            <ButtonGroup style={btnStyles}>

                <Button color='primary' key='1' variant='contained' onClick={handleClose}>cancel</Button>
                <Button color='secondary' key='2' onClick={handleClick}>Delete</Button>
            </ButtonGroup>

        </Dialog></>




}

const UpdateTourBtn = ({ tour }) => {



    const dispatch = useDispatch();


    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };







    return <><Button color='success' key={tour._id} endIcon={<ArrowForwardIosIcon />} onClick={handleClickOpen} >Update</Button>
        <Dialog maxWidth='md' fullWidth={true} onClose={handleClose} open={open}>
            <DialogTitle >Update this tour</DialogTitle>
            <TourForm tour={tour} handleClose={handleClose} actionType='update tour'></TourForm>

        </Dialog></>





}


export default function UpdateAndDeleteTourBtns({ tour }) {
    return (
        <ButtonGroup style={btnStyles}>
            <UpdateTourBtn tour={tour} />
            <DeleteTourBtn tourID={tour._id} />
        </ButtonGroup>
    )
}