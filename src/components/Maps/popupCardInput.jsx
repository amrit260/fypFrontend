import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, TextField, Paper, FormControlLabel, Switch } from '@mui/material'
import { Popup } from 'react-map-gl'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { toast } from 'react-toastify';


const PopupCardInput = ({ latitude, longitude, handleLocationUpdate, resetNewPlace, setDisabled, isDisabled, hidePopup }) => {
    let locationObj = {
        type: 'Point',
        coordinates: [],
        address: '',
        description: '',
        day: 2,
    }
    const [state, setState] = useState(locationObj)
    const [isStartLocation, setIsStartLocation] = useState(false)
    const handleSwitchChange = (event) => {
        setIsStartLocation(!isStartLocation)
    }



    const handleClick = () => {
        // push coordinates on click of add button note:- address and description are already updated with onchange
        // locationObj.coordinates = [latitude, longitude]

        state.coordinates.push(longitude, latitude)
        if (isStartLocation) {   // disable startLocation btn when startlocation is added.
            toast(' Startlocation added!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setDisabled(true) // disable startLocation switchbox
            hidePopup(true) // close popup after adding start location
            handleLocationUpdate(isStartLocation, state)
            return

        }
        toast.info('Location added!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        hidePopup(true)
        handleLocationUpdate(isStartLocation, state)




    }

    const handleChange = (e) => {
        const { name, value } = e.target


        setState({ ...state, [name]: value })
        console.log(state)
    }


    return <Popup
        latitude={latitude}
        longitude={longitude}
        closeButton={true}
        closeOnClick={true}
        onClose={resetNewPlace}
        anchor="bottom"
    >  <Paper style={{ margin: '0px', padding: '0px' }} variant='outlined' >

            <Typography variant="caption" paragraph={true}  >
                Latitude: {latitude}<br /> Longitude: {longitude}
            </Typography>
            <FormControlLabel control={<Switch onClick={handleSwitchChange} disabled={isDisabled} checked={isStartLocation} color='success' />} label="Start Location" />
            <TextField style={{ marginBottom: '5px', padding: '0px' }} size="small" onChange={handleChange} value={state.address} variant="standard" name="address" label="Address"></TextField>
            <TextField style={{ marginBottom: '5px', padding: '0px' }} size="small" onChange={handleChange} value={state.day} variant="standard" name='day' label="Travel day"></TextField>
            <TextField style={{ marginBottom: '5px', padding: '0px' }} size="small" onChange={handleChange} value={state.description} variant="standard" name="description" label="description"></TextField>


            <Button onClick={handleClick} endIcon={<AddLocationIcon />} fullWidth variant="contained" size="small" mt={2} color="primary">Add</Button>

        </Paper> </Popup>
}

export default PopupCardInput