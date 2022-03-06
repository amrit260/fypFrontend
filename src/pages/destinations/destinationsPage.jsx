import React from "react"
import Page from "src/components/Page"
import Destinations from "../../components/destinations/destinationsComponent"
import PopularTours from "../../components/popular/popularTours"

const DestinationPage = () => {

    return <React.Fragment>{window.scrollTo(0, 0)}
        <Page title="Destinations | Explore Nepal">
            <Destinations />
            <PopularTours />
        </Page>
    </React.Fragment>


}

export default DestinationPage