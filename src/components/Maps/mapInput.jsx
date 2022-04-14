
import Map, { Marker, Popup } from 'react-map-gl';
import { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PopupCard from 'src/components/Maps/popupCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container } from '@mui/material';
import PopupCardInput from './popupCardInput';
import PopupList from './PopupList';

function MapInput({ handleLocationUpdate }) {

    const [viewport, setViewport] = useState({
        latitude: 27.716510189839976,
        longitude: 85.32974009903562,
        zoom: 11,

    });



    const [newPlace, setNewPlace] = useState(null)
    const [isDisabled, setDisabled] = useState(false) // for startlocation switchbox
    const [hide, hidePopup] = useState(false) // for closing popup afer adding new place



    const handleAddClick = (e) => {
        const { lng, lat } = e.lngLat;
        let placeObj = {
            type: 'point',
            coordinates: [lng, lat]
        }
        hidePopup(false)
        setNewPlace(placeObj)

    }
    const resetNewPlace = () => {
        // reset new place when the popup is closed
        // new place will initialize when user clicks on a map

        setNewPlace(null)
    }





    return (
        <Container>
            <Map
                fullWidth
                initialViewState={viewport}
                mapboxAccessToken='pk.eyJ1Ijoic2xkZmpha2pmbCIsImEiOiJja2lrN3o5M3QwN2NwMnltODUycG52ODRkIn0._HVYY-yRhnyX5YgVUNHkOw'
                style={{ height: '60vh', }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onZoom={(viewport) => {

                    setViewport(viewport.viewState)

                }}
                onClick={handleAddClick}
                map
            >

                {newPlace && !hide ?

                    <PopupCardInput handleLocationUpdate={handleLocationUpdate} isDisabled={isDisabled} setDisabled={setDisabled} hidePopup={hidePopup} resetNewPlace={resetNewPlace} latitude={newPlace.coordinates[1]} longitude={newPlace.coordinates[0]} />
                    : ''}


            </Map>
        </Container >
    );
}

export default MapInput;