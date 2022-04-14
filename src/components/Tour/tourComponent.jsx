
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './tourComponentStyles.css'
import getItems from 'src/utils/tourRequests/getItems'
import { serverURL } from 'src/config'



const TourComponent = () => {



  // if (!props.tours) return ''


  const tours = useSelector(state => state.tours)



  // let {searchTerm} = Queries

  // if(searchTerm){

  // }
  const tourCards = tours.map((tour, index) => {
    if (index < 3) {

      return <div className="card" key={tour.id}>
        <div className="card-header text-capitalize card-dark display-6 text-dark text-center">
          {tour.name}
        </div>
        <img src={`${serverURL}/img/tours/${tour.images[0]}`} alt="" className="card-img-top" />
        <div className="card-body">

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

  return <div className={`container`}>{window.scrollTo(0, 0)}
    <div className="d-flex">

      <hr className="my-auto flex-grow-1" />

      <div className="px-4 text-uppercase visit-text text-primary" id="visit-text">
        places to visit
      </div>

      <hr className="my-auto flex-grow-1" />
    </div>
    <br />

    <div className="card-columns justify-content-center">




      {tourCards}
    </div>
  </div>
}



export default TourComponent