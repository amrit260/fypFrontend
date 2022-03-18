import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookAndWishBtns from "../action-buttons/BookAndWish"
import './popularTourStyles.css'
import { serverURL } from '../../config'

const popularTours = ({ tours }) => {


  if (!tours) return ''

  const popularTours = tours.filter((item, index) => item.ratingsAverage > 4
  ).filter((item, index) => index < 6).map(tour => (<div key={tour.id} className="col-md-4 col-sm-6">
    <div key={tour.id} className="single-package-item">
      <Link to={`/tours/${tour.id}`}><img src={`${serverURL}/img/tours/${tour.images[0]}`} alt="package-place" /></Link>
      <div className="single-package-item-txt">
        <Link to={`/tours/${tour.id}`}> <h3 className="text-capitalize">{tour.name}<span className="pull-right">${tour.price}</span></h3></Link>
        <div className="packages-para">
          <p>
            <span>
              <i className="fa fa-angle-right" /> {tour.duration} days
            </span>
            <i className="fa fa-angle-right" /> {tour.category}
          </p>
          <p>
            <span>
              <i className="fa fa-angle-right" /> {tour.difficulty}
            </span>
            <i className="fa fa-angle-right" /> {tour.members} Group Members
          </p>
        </div>
        <div className="packages-review">
          <p>
            {[...Array(parseInt(tour.ratingsAverage, 10))].map((el, index) => <i key={index} className="fa fa-star" />)}


            {/* <span>2544 review</span> */}
          </p>
        </div>
        <div className="about-btn">
          <BookAndWishBtns item={tour} key={tour.id}></BookAndWishBtns>
        </div>
      </div>
    </div>
  </div>)

  )


  return <section id="pack" key='duck' className="packages">
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

const getTours = (state) => ({ tours: state.tours })


export default connect(getTours, null)(popularTours);