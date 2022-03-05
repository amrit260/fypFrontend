import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Destinations = ({tours})=>{
  const serverURL = 'http://127.0.0.1:3000/'
  if(!tours) return''

  const destinations = tours.data.map((el,index) =>{
    return  <div key={el.id} className="service-row">
    <div className="container">
      
      <br />
      <div className="row align-items-center">
        
        <div className={`col-md-6 ${(index+2)%2+1===1?'order-md-2':''} `}>
          <div className="service-row-text">
            <h2 className="section-title">{el.name}</h2>
            <p>
              {el.description}
            </p>
            <Link className="btn btn-primary" to={`/tours/${el.id}`}>Visit Now</Link>
          </div>
        </div>
        <div className="col-md-6 d-md-block d-none">
          <div className="service-row-img">
          {}  <img src={`${serverURL}/img/tours/${el.images[1]}`} alt="Service" />
          </div>
        </div>
      </div>
    </div>
  </div>
  })

    return <React.Fragment>


    <div className="page-heading2 header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Destinations</h1>
          </div>
        </div>
      </div>

    </div>
        <p className="lead text-muted">Home &gt;&gt; Destinations</p>


   {destinations}
    
    
   
   
    </React.Fragment>



}

const getTours = (state)=>{return ({tours:state.tours})}
export default connect(getTours,null)(Destinations)