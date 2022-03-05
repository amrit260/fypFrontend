const Footer = ()=>{
    return   <footer>
    <div className="container">
      <ul>
        <li>
          <a href="error.html"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="error.html"><i className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="error.html"><i className="fab fa-linkedin-in"></i></a>
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
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/destinations">Destinations</a></li>
           
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="item date">
            <h4 className="text-uppercase">Popular Tours</h4>
            <p><a href="/nature">Nature Beauty</a></p>
            <p><a href="/adventure">Adventure</a></p>
            <p><a href="/jungle">Jungle Discovery</a></p>
            
          </div>
        </div>
      
      </div>
    </div>
    <div className="copyright text-center">
      <p>Copyright&copy; 2021 all rights reserved</p>
    </div>
  </footer>
}

export default Footer