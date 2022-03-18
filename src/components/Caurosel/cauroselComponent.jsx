
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { serverURL } from '../../config'

const Caurosel = ({ tours }) => {


  if (!tours) {
    return null
  }
  console.log('check below this')
  console.log(tours)


  const cauroselItems = tours.filter((item, index) => index > 4).map((tour, index) => {
    return (<div key={tour.id} className={`carousel-item carousel-image-${index + 1} ${index === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${serverURL}/img/tours/${tour.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="container">
      <div className="carousel-caption d-sm-block text-left">
        <span className="display-3 text-white text-capitalize font-weight-bold">
          {tour.name.split(' ')[0]}
        </span>

        <span className="text-white display-3 font-weight-bold text-capitalize"> {tour.name.split(' ')[1]}</span>

        <p className="lead">
          {tour.description.slice(0, 100)}...
        </p>
        <Link to={`/tours/${tour.id}`} className="btn btn-primary btn-lg">Visit Now</Link>
      </div>
    </div>
    </div>)
  })


  return <section id="showcase">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">


        {cauroselItems}



      </div>

      <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
        <span className="carousel-control-prev-icon"></span>
      </a>

      <a href="#myCarousel" data-slide="next" className="carousel-control-next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  </section>
}

const getTours = (state) => {

  return { tours: state.tours }
}


export default connect(getTours, null)(Caurosel)