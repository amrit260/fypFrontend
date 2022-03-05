import ActionButtons from "../action-buttons/actionButtonsComponent"
import './popularTourStyles.css'
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'

const popularTours = ({tours})=>{
  const serverURL = 'http://127.0.0.1:3000/'

if(!tours) return ''
  
  const popularTours = tours.data.filter((item,index)=>{
    return item.ratingsAverage>4
  }).filter((item,index)=>{   // second filter limits tour limits to 6
    return index<6
  }).map(tour=>{
      
      return (<div key={tour.id} className="col-md-4 col-sm-6">
      <div key={tour.id} className="single-package-item">
     <Link to={`/tours/${tour.id}`}><img  src={`${serverURL}/img/tours/${tour.images[0]}`} alt="package-place" /></Link>   
        <div className="single-package-item-txt">
        <Link to={`/tours/${tour.id}`}> <h3 className="text-capitalize">{tour.name}<span className="pull-right">${tour.price}</span></h3></Link> 
          <div className="packages-para">
            <p>
              <span>
                <i className="fa fa-angle-right"></i> {tour.duration} days
              </span>
              <i className="fa fa-angle-right"></i> {tour.category}
            </p>
            <p>
              <span>
                <i className="fa fa-angle-right"></i> {tour.difficulty}
              </span>
              <i className="fa fa-angle-right"></i> {tour.members} Group Members
            </p>
          </div>
          <div className="packages-review">
            <p>
              {[...Array(parseInt(tour.ratingsAverage))].map((el,index)=>{
                return <i key={index} className="fa fa-star"></i>
              })}
              
             
              {/* <span>2544 review</span> */}
            </p>
          </div>
          <div className="about-btn">
          <ActionButtons item={tour} key={tour.id}></ActionButtons>
          </div>
        </div>
      </div>
    </div>)

  })


    return  <section id="pack" key='duck' className="packages">
    <div className="container">
      <div className="gallary-header text-center">
        <h2>Popular Tours</h2>
        <p>
          Here are the list of some popular tours for this season.
        </p>
      </div>
      <div className="packages-content">
        <div key='fuck' className="row">


  
          {popularTours}
            
             
               
         
          
        </div>
      </div>
    </div>
   
  </section>
}

const getTours = (state)=>{
  return ({tours:state.tours})
}

export default connect(getTours,null)(popularTours);