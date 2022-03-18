import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router';
import {serverURL} from '../../config';
export const signUp = (user) => {
  toast.configure();
  console.log('inside authaction');
  console.log(user);
  // for loop to check if the user already exists

  return (dispatch) => {
    axios
      .post(`${serverURL}/api/v1/users/signup`, user)
      .then((res) => {
        
        
        if (res.status === 201) {
          localStorage.setItem('jwt', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
        localStorage.setItem('loggedIn', true);
           dispatch({
          type: 'SIGN_UP',
          data:res.data
        });
        }
        else{
          throw new Error(res);
        }
       
      })
      .catch((err) => {
     
        if(err.response){
          let error = err.response.data.message.split(' ')
          let message = ''
          error[0] ==='E11000' ? message = 'User already exists' : message = err.response.data.message
           toast.error(err.response.status === 404? 'login failed':message, {
         position: toast.POSITION.BOTTOM_RIGHT
       });
        }
        else{
          toast.error('network error', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
       
      });
  };
};

export const login = (loginCredintials) => {
  toast.configure();
  console.log('inside authaction');
  console.log(loginCredintials);
  // for loop to check if the user already exists

  return (dispatch) => {
    axios
      .post(`${serverURL}/api/v1/users/login`, loginCredintials)
      .then((res) => {
        
        console.log();
        
        if (res.status=== 200) {
          console.log(res)
          localStorage.setItem('jwt', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
        localStorage.setItem('loggedIn', true);
           

           dispatch({
          type: 'LOG_IN',
          data: res.data
        });
        }
        else{
           throw new Error(res);
        }
       
       
      })
      .catch((err) => {

        
        
         if(err.response){
           
            toast.error(err.response.status === 404? 'login failed':err.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
         }
         else{
          toast.error('network error', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
         }
       
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return (dispatch) =>{
   dispatch({type:'LOG_OUT'})
  };
}