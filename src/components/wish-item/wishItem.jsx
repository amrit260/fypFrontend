
import React from 'react';
import { serverURL } from 'src/config';
import './wishItem.css'

const wishItem = ({ item }) => {
    return <React.Fragment>

        <div className="wish-item">
            <img src={`${serverURL}/img/tours/${item.images[0]}`} alt="" />
            <div className="content">
                <div className="wish-item-title">{item.name}</div>
                <p>Price:${item.price}</p>
            </div>


        </div>

    </React.Fragment>
}

export default wishItem;