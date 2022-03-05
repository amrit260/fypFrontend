import { addItemToWishList } from './wishList.utils';
import { AddWishItem } from './wishListActions';
import ActionTypes from './wishListActionTypes';

const initialState = {
  hidden: true,
  wishItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.WISH_LIST_HIDE_SHOW:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ActionTypes.ADD_ITEM:
      // console.log(state);

      return {
        ...state,
        wishItems: addItemToWishList(state.wishItems, action.payload),
        hidden: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
