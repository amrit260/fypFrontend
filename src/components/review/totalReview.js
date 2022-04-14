import { Typography,Paper,Rating } from "@mui/material";



const TotalReview = ({avgRating,totalRating})=>{
    return <Paper variant='outlined' sx={{padding:'10px'}}>
        <Typography variant='h5'>Total Ratings : </Typography>
        <Typography align='center' variant='h6'>{avgRating}</Typography>
        <Typography align='center' variant='h6'><Rating name="read-only" value={Math.floor(avgRating)} readOnly /></Typography>
        <Typography align='center' >This tour got average of {avgRating} out of  {totalRating} total ratings.</Typography>

    </Paper>
}

export default TotalReview;