import { Grid } from "@mui/material"
import BookingCard from "./bookingCard"

 const BookingList = ({bookings})=>{

    const cards = bookings.map(booking=>{
        return <Grid item xs={4} md={4} sm={12}> <BookingCard booking = {booking}/></Grid>

    })
 

    return cards

}

export default BookingList