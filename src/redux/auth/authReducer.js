import { toast } from 'react-toastify';
 

const initialState = {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  loggedIn: localStorage.getItem('loggedIn') ? true : false
};
const authReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case 'SIGN_UP':
      toast('Welcome to explore nepal', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
 
      return {
        ...state,
        token: action.token,
        user:action.data.user,
        loggedIn: true
      };
    case 'LOG_IN':
      toast.success('Logged in successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
       
      
      return {
        ...state,
        token: action.data.token,
        user:action.data.data.user,
        loggedIn: true
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
      token:null,
      id:null,
      loggedIn:false
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
