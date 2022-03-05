import {connect} from 'react-redux'
import { AddWishItem, hideOrShowWishlist } from '../../redux/wishList/wishListActions'


import './actionButtonStyles.css'
const ActionButtons = ({item,addItem}) =>{
   console.log(item)
    return <div className="action-btns">
        <button onClick={()=>addItem(item)} className='btn-primary'>Add to wishlist</button> <button className='btn-dark'>Book Now</button>
    </div>
}

const itemAdder = (dispatch)=>{
    return ({
        addItem:(data)=>dispatch(AddWishItem(data))
    })
}
export default connect(null,itemAdder)(ActionButtons)