
import Map, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PopupCard from 'src/components/Maps/popupCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container } from '@mui/material';

function Maps({ startLocation, locations }) {
    const latitude = startLocation.coordinates[1]
    const longitude = startLocation.coordinates[0]
    const [viewport, setViewport] = useState({
        latitude,
        longitude,
        zoom: 10,

    });

    console.log(viewport.zoom)

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
                map
            >

                <Marker longitude={longitude} latitude={latitude} anchor="left" >
                    <LocationOnIcon color='danger' sx={{ fontSize: 50 }} />
                    <PopupCard longitude={longitude} latitude={latitude} address={startLocation.address} description={startLocation.description} anchor="left" />
                </Marker>
                {
                    locations.map((location, index) => {
                        return (
                            <Marker key={index} longitude={location.coordinates[0]} latitude={location.coordinates[1]}  >
                                <LocationOnIcon color='success' sx={{ fontSize: 50 }} />


                                <PopupCard longitude={location.coordinates[0]} latitude={location.coordinates[1]} zoom={viewport.zoom} day={location.day} address={location.address} description={location.description} />

                            </Marker>
                        )
                    })
                }



            </Map>
        </Container >
    );
}

export default Maps