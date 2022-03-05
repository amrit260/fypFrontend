import ActionTypes from './wishListActionTypes';

export const hideOrShowWishlist = (state) => {
  return { type: ActionTypes.WISH_LIST_HIDE_SHOW };
};

export const AddWishItem = (state) => {
  return { type: ActionTypes.ADD_ITEM, payload: state };
};
