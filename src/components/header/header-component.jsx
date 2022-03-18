import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './headerStyles.css'
import WishList from '../wish-list/wishList'
import { hideOrShowWishlist } from '../../redux/wishList/wishListActions'
import { useDispatch, useSelector } from 'react-redux'
import AccountPopover from '../../layouts/dashboard/AccountPopover'


const Header = (props) => {

  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const handleWishList = () => {
    dispatch(hideOrShowWishlist())
  }



  return <div>

    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <ul className="left-info">
              <li>
                <a href="error.html"><i className="fa fa-clock-o"></i>Mon-Fri 09:00-17:00</a>
              </li>
              <li>
                <a href="error.html"><i className="fa fa-phone"></i>9867984444</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="right-icons">
              <li>
                <a href="error.html"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="error.html"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="error.html"><i className="fa fa-linkedin"></i></a>
              </li>
              {/* <li>
                <a style={{fontSize:"12px"}} href="help.html">Help?</a>
              </li> */}

            </ul>
          </div>
        </div>
      </div>
    </div>

    <header className="" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"
          ><h2>Welcome Nepal</h2></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active" >
                <Link className="nav-link" data-toggle="collapse" data-target="#navbarResponsive" to='/'
                >Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item" >
                <Link to='/destinations' data-toggle="collapse" data-target="#navbarResponsive" className="nav-link"  >Destinations</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" data-toggle="collapse" data-target="#navbarResponsive" to="/contact" >Contact Us</Link>
              </li>
              <li className="nav-item" >
                <div onClick={handleWishList} data-toggle="collapse" data-target="#navbarResponsive" className="nav-link nav-btn"  > cart </div>
              </li>
              {state.auth.loggedIn ?
                <li className="nav-item" >
                  <AccountPopover />
                </li>


                : <li className="nav-item" >
                  <Link className=" nav-link" to="/auth/login" data-toggle="collapse" data-target="#navbarResponsive" >Sign In</Link>
                </li>

              }




            </ul>

          </div>
          {state.wishList.hidden ? '' : <WishList />}
        </div>
      </nav>
    </header>

  </div>
}



export default Header