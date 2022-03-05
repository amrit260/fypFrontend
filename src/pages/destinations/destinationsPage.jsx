import React from "react"
import Destinations from "../../components/destinations/destinationsComponent"
import PopularTours from "../../components/popular/popularTours"

const DestinationPage = ()=>{

    return <React.Fragment>{window.scrollTo(0, 0)}
        <Destinations/>
        <PopularTours/>
    </React.Fragment>

}

export default DestinationPage