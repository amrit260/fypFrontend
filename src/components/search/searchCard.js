
import {useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './searchCards.css'
import getItems from 'src/utils/tourRequests/getItems'
import { serverURL } from 'src/config'
import { AlertTitle,Alert,Grid } from '@mui/material'
import SearchComponent from './searchComponent'



const SearchCards = (props) => {

  const queryString = useLocation().search
   const [tours,setTours]= useState([])
    useEffect( async()=>{
        if (queryString) {
            
            const res = await getItems('Search results', `${serverURL}/api/v1/tours${queryString}`)
            setTours(res)
            
            
          }
        

   },[])



  


 
  
 


  // let {searchTerm} = Queries

  // if(searchTerm){

  // }
  const SearchResults  = () =>{
    if(tours.length >=1){
       
  return tours.map((tour, index) => {
    if (index < tours.length) {

      return <div className="card" key={tour.id}>
        <div className="card-header text-capitalize card-dark display-6 text-dark text-center">
          {tour.name}
        </div>
        <img src={`${serverURL}/img/tours/${tour.images[0]}`} alt="" className="card-img-top" />
        <div className="card-body">

          <span className="card-subtitle text-success float-right text-muted">Difficulty : {tour.difficulty}</span>
          <div className="card-subtitle text-muted">Duration : {tour.duration} days</div>
          <p className="card-text">
            {tour.description ? tour.summary.slice(0, 100) : ''}...
          </p>
          <Link to={`/tours/${tour.id}`} className="btn btn-primary btn-block">Read More </Link>
        </div>
      </div>
    }

    return ''
  })
    }
    else{
        return <Grid container direction='row' spacing={4}  >
            <Grid item xs = {12} md = {12}>
            <Alert className="card" severity="info">
        <AlertTitle>Results not found</AlertTitle>
Check your spelling   — <strong>and try again!</strong>
</Alert></Grid>
 <Grid sx={{marginBottom : '30px'}} fullWidth item xs = {12} md={12}>
<SearchComponent/></Grid>
</Grid>
  }}

  return <div className={`container search-result`}>{window.scrollTo(0, 0)}
    <div className="d-flex">

      <hr className="my-auto flex-grow-1" />

      <div className="px-4 text-uppercase visit-text text-primary" id="visit-text">
        Your search results
      </div>

      <hr className="my-auto flex-grow-1" />
    </div>
    <br />

    <div className={`${tours.length >=1 ?'card-deck':''} justify-content-center`}>

    <SearchResults/>
    </div>
  </div>
}



export default SearchCards