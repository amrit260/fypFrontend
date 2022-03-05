import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import ActionButtons from '../../components/action-buttons/actionButtonsComponent'
import {connect} from 'react-redux'
import axios from 'axios'
import './tourPageStyles.css'





const TourPage = (props) => {

    const [tour,setTour] = useState(null)

   const {tourID} = useParams()
   

    useEffect(()=>{
        
        axios
    .get(`http://127.0.0.1:3000/api/v1/tours/${tourID}`)
    .then((res) => {
      if(res.status = 'success'){
           console.log("hiii")
           setTour(res.data.data.data)
    console.log(tour)
    
      }
      

    
      
    })
    .catch((err) => {
     console.log(err)
    });
    
    },[])


  

    

       
   
    
    


   
    if(!tour) return <div style={{marginTop:'90px'}}>tour not found</div>
    
    console.log('this is tour')
    console.log(tour)
    return <div className="tour-page">{window.scrollTo(0, 0)}
        <div className="tour-banner">
           
            <div className="banner-content">
               <h5 className='banner-content-title text-capitalize'>{tour.name}</h5>
               
                <div className="tour-fact-list">
                
                   <div> <span className="text-secondary display-5">Duration : </span> <span className='text-dark'>  {tour.duration} Days</span> </div> 
                   <div> <span className="text-secondary display-5">Category : </span> <span className='text-dark'>  {tour.category}</span> </div> 

                </div>
                <div className="tour-fact-list">
                   <div> <span className="text-secondary display-5">Difficulty : </span> <span className='text-dark'>  {tour.difficulty}</span> </div> 
                
                   <div> <span className="text-secondary display-5">Max members : </span> <span className='text-dark'>  {tour.members} peoples</span> </div> 

                </div>
                <div className="tour-fact-list">
                   <div> <span className="text-secondary display-5">Price : $</span> <span className='text-dark'>  {tour.price}</span> </div> 
                   <div> <span className="text-secondary display-5">Rating : </span> <span className='text-dark'>  {tour.rating}</span> </div> 
                
                 
                </div>
               <h5 className='banner-content-title'>Tour guides</h5>
               
                <div className="tour-fact-list">
                
                   {/* <div> <span className="text-secondary display-5">Lead Guide : </span> <span className='text-dark'>  {tour.guides[0].name}</span> </div> 
                   <div> <span className="text-secondary display-5">Tour Guide : </span> <span className='text-dark'>  {tour.guides[0].name}</span> </div>  */}

                </div>
                <ActionButtons item={tour}></ActionButtons>
               
               
               
               

            </div> 
            <div className="banner-image-parent">
            <div className="banner-image" style={{backgroundImage:`url('http://127.0.0.1:3000/img/tours/${tour.images[0]}')`}}></div></div>
        </div>


        <div className="tour-images">

             {tour.images.map((image,index)=>{
                if(index>=3)return;
                return <div className="tour-img">
                <img src={`http://127.0.0.1:3000/img/tours/${image}`} alt=""/>
            </div>
            })}
            
            
         
            
            
            
        </div>



        <div className="tour-banner about-tour">
           
           <div className=" about-tour-image" style={{backgroundImage:`url('http://127.0.0.1:3000/img/tours/${tour.images[tour.images.length-1]}')`}}></div>
               
                <div className="banner-content about-tour-content">
               <h5 className='banner-content-title text-capitalize'>About {tour.name}</h5>
               <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in obcaecati eaque non tenetur explicabo blanditiis assumenda saepe corporis a!</p>
               <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in obcaecati eaque non tenetur explicabo blanditiis assumenda saepe corporis a!</p>
               
                 </div> 
               

          
        </div>
      
      
    </div>
}

// const tour = (state)=> {
    


//     return ({tours:state.tours});

// }


export default TourPage