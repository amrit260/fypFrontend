import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Banner = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)
  return <div className="request-form">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h3>“Wherever you go becomes a part of you somehow”</h3>
          <span
          >– Anita Desai</span
          >
        </div>
        <div className="col-md-4">
          {/* <a href="contact.html" className="border-button">Contact Us</a> */}
          {isLoggedIn ? null : <Link to='/auth/login' className="border-button">Log In</Link>}
        </div>
      </div>
    </div>
  </div>
}

export default Banner