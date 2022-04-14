import { useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Popup } from 'react-map-gl'

const PopupCard = ({ latitude, longitude, zoom, address, description, day }) => {
    const [open, setOpen] = useState(true)

    return <Popup longitude={longitude} latitude={latitude}
        closeButton={true}
        // closeOnMove={true}
        closeOnClick={false}
        // onClose={() => toogleClose()}
        anchor="right"
    > <Card style={{ margin: '0px', padding: '0px' }} sx={{ maxWidth: 200, maxHeight: 300 }}>

            <Typography variant="h6" color="success" >

                {day != undefined ? `Day ${day}` : 'Tour starts from here!'}
            </Typography>
            {zoom < 11 ? '' : <>
                <Typography variant="subtitle1" color="primary" component="div">
                    {address}
                </Typography>
                <Typography sx={{ mb: 1.5, }} variant="subtitle2" component="div">
                    Info
                </Typography>
                <Typography variant="body2">
                    {description}

                </Typography>
            </>}

        </Card> </Popup>
}

export default PopupCard