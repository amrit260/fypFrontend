import SearchBox from "../search/searchComponent"


const WelcomeBanner = ()=>{

    return (
     <section className="banner  header-text header-text-homepage" id="top">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="banner-caption">
                <div className="line-dec"></div>
                <h2>Visit nepal 2021</h2>
                <span
                  >Lifetime experience </span
                >
                <div className="blue-button">
                  <a className="scrollTo btn btn-primary" href="#">
                    visit now</a
                  >
                </div>
              </div>
           <SearchBox/>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default WelcomeBanner