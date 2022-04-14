import { Grid, Typography } from '@mui/material'
import ReviewCard from './reviewCard'
const ReviewList = ({reviews,setReviews})=>{
    const maxItems = 5;
return <Grid container direction='column'  spacing ={3}>
    {/* <Typography > Tour reviews by other users </Typography> */}
    {reviews.map(review=>{
        return <ReviewCard review={review} setReviews={setReviews}/>
    })}
    </Grid>
}
export default ReviewList