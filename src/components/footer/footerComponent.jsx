import { Link } from "react-router-dom"

const Footer = () => {
  return <footer>
    <div className="container">
      <ul>
        <li>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </li>

      </ul>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="item">
            <h4 className="text-uppercase">Contact us</h4>
            <p className="address">
              Welcome Nepal office<br />
              Koteshwor, Kathmandu<br />
              +977 989 999
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="item">
            <h4 className="text-uppercase">additional links</h4>
            <ul>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>

            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="item date">
            <h4 className="text-uppercase">Popular Tours</h4>
            <p><a href="#">Nature Beauty</a></p>
            <p><a href="#">Adventure</a></p>
            <p><a href="#">Jungle Discovery</a></p>

          </div>
        </div>

      </div>
    </div>
    <div className="copyright text-center">
      <p>Copyright&copy; 2022 all rights reserved</p>
    </div>
  </footer>
}

export default Footer