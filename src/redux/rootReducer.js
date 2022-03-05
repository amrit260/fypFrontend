import { combineReducers } from 'redux';
import tourReducer from './tours/tourRedeucer';

import userReducer from './user/userReducer';
import wishListRedeucer from './wishList/wishListReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  user: userReducer,
  wishList: wishListRedeucer,
  tours: tourReducer,
  auth: authReducer,
});
