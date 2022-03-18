
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import './tourComponentStyles.css'

import { serverURL } from 'src/config'



const TourComponent = (props) => {

  const queryString = useLocation().search


  if (!props.tours) return ''


  let tours;
  if (queryString) {
    const members = new URLSearchParams(queryString).get('members')
    const duration = new URLSearchParams(queryString).get('duration')
    const category = new URLSearchParams(queryString).get('category')
    tours = props.tours.filter(item => category.includes(item.category.toString()) || members === item.members || duration === item.duration)
    console.log(members)
  }

  else {
    tours = props.tours
  }



  // let {searchTerm} = Queries

  // if(searchTerm){

  // }
  const tourCards = tours.map((tour, index) => {
    if (index < props.tourCount) {

      return <div className="card" key={tour.id}>
        <div className="card-header text-capitalize card-dark display-6 text-dark text-center">
          {tour.name}
        </div>
        <img src={`${serverURL}/img/tours/${tour.images[0]}`} alt="" className="card-img-top" />
        <div className="card-body">

          <div className="card-subtitle text-muted">Duration : {tour.duration} days</div>
          <p className="card-text">
            {tour.description ? tour.description.slice(0, 100) : ''}...
          </p>
          <Link to={`/tours/${tour.id}`} className="btn btn-primary btn-block">Read More </Link>
        </div>
      </div>
    }

    return ''
  })

  return <div className={`container ${props.fromSearch ? 'search-result' : ''}`}>{window.scrollTo(0, 0)}
    <div className="d-flex">

      <hr className="my-auto flex-grow-1" />

      <div className="px-4 text-uppercase visit-text text-primary" id="visit-text">
        {props.fromSearch ? 'Your search results' : 'places to visit'}
      </div>

      <hr className="my-auto flex-grow-1" />
    </div>
    <br />

    <div className="card-columns justify-content-center">




      {tourCards}
    </div>
  </div>
}

const getTours = (state) => {

  return {
    tours: state.tours
  }
}

export default connect(getTours, null)(TourComponent)