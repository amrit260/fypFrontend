import React from 'react'
import WishItem from '../wish-item/wishItem'
import {connect} from 'react-redux'



import './wishListStyles.css'





const WishList = ({wishItems})=>{
    
    if(wishItems.length ===0) return <div className="wishlist">
    <div className="wish-items">
       <p className="text text-center">Your List is empty</p>
         </div> 
        <button className="btn btn-warning">More details</button>
   
</div>
  const wishCards = wishItems.map(item=>{
      return <WishItem key={item.id} item={item}/>
  })
    
    return <div className="wishlist">
        <div className="wish-items">
            
{wishCards}
             </div>
            <button className="btn btn-warning">More details</button>
       
    </div>
}

const getWishItems = state =>{
    return {wishItems:state.wishList.wishItems}
}


export default connect(getWishItems)(WishList)