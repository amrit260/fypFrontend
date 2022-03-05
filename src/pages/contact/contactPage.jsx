import React from "react"

const contactPage = ()=>{

    return <React.Fragment>
      {window.scrollTo(0, 0)}
        
   
    <div
      className="page-heading  header-text" style={{background: `linear-gradient(rgba(54, 54, 54, 0.411), rgba(78, 78, 78, 0.37)),
      url(../../images/swayambhu.jpeg)`,backgroundSize:'cover',backgroundPosition:'center'}}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-information">
      <div className="container">
        <p className="lead text-muted">Home &gt;&gt; contact us</p>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <h4>Phone</h4>
              <p>
                Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec
                cursus augue.
              </p>
              <a href="#">+090-200-300</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>
                Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec
                cursus augue.
              </p>
              <a href="#">info@welcomeNepal.com</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <h4>Location</h4>
              <p>Welcome nepal office<br />Koteshowr, kathmandu</p>
              <a href="#map">View on Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="callback-form contact-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Request a <em>tour</em></h2>
              <span>Suspendisse a ante in neque iaculis lacinia</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form">
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="E-Mail Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Group info"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Other info"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="filled-button"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.192417652972!2d85.33556681640061!3d27.677179874868052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1623322186829!5m2!1sen!2snp" 
     
        width="100%"
        height="500px"
        frameborder="0"
        style={{border :0}}
        allowfullscreen
      ></iframe>
    </div>

   
    </React.Fragment>
}

export default contactPage