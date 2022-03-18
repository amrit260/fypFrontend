import * as React from 'react';
import Map from 'react-map-gl';

function Maps() {

    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        width: '80vw',
        height: '100vh',
    });


    return (
        <Map
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            mapboxAccessToken='pk.eyJ1Ijoic2xkZmpha2pmbCIsImEiOiJja2lrN3o5M3QwN2NwMnltODUycG52ODRkIn0._HVYY-yRhnyX5YgVUNHkOw'
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            map
        />
    );
}

export default Maps