import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token'),
  name: null,
  email: null,
  id: null,
  loggedIn: localStorage.getItem('loggedIn') ? true : false
};
const authReducer = (state = initialState, action) => {
  let user;
  switch (action.type) {
    case 'SIGN_UP':
      toast('Welcome to explore nepal', {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      user = jwtDecode(action.token);
      return {
        ...state,
        token: action.token,
        id: user.id,
        loggedIn: true
      };
    case 'LOG_IN':
      toast('Welcome to explore nepal', {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      user = jwtDecode(action.token);
      return {
        ...state,
        token: action.token,
        id: user.id,
        loggedIn: true
      };
    case 'SIGN_OUT':
      return {
        ...state,
        currentUser: null
      };
    case 'SET_TOUR':
      return {
        ...state,
        tours: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
