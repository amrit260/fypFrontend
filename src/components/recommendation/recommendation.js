import {useState,useEffect} from 'react'
import { Typography,Grid,Paper, Rating,Box,Button } from "@mui/material";
import Label from "../Label";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popularTours from "../popular/popularTours";
import getItems from 'src/utils/tourRequests/getItems';
import { serverURL } from 'src/config';

const gridItemStyles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:'10px',

}






const Recommendations = ()  =>{

    let [recommendations,setRecommendations]= useState([]);

useEffect(async()=>{
  const res =  await getItems('Recommendations',`${serverURL}/api/v1/rec`)
    if(res){
        setRecommendations(res.similarTours)
        console.log(recommendations)
    }
},[])


    return <Paper sx={{padding:'10%'}} ><Typography>Recommended for you</Typography><Grid container spacing={3} >
           {recommendations.map(tour=>{
               return <Grid item   xs={4}  >
                <Paper elevation={20}>
                 <Label sx={{position:'relative',top:30,right:-4}} color='warning' variant='filled'>$ {tour.price}</Label>
                <img src ={`${serverURL}/img/tours/${tour.images[1]}`} ></img>
                 <Box sx={gridItemStyles}>

                <Typography>{tour.name}</Typography>
                <Typography  variant='subtitle2'> {tour.difficulty}  </Typography>
                
                </Box>
                <Box sx={{padding:'10px'}}>
                <Rating name="read-only" value={3} readOnly />
                <Typography  variant='subtitle2'> {tour.summary.slice(0,60)}...   </Typography>

                <Button color='primary' fullWidth variant='contained'>View</Button>
                </Box>
                </Paper>
            </Grid>
            })}
            
             </Grid>

             <Typography>Special offers</Typography><Grid container spacing={3} >

              

             </Grid>

    </Paper>
}


export default Recommendations;