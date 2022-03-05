import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router';
export const signUp = (user) => {
  toast.configure();
  console.log('inside authaction');
  console.log(user);
  // for loop to check if the user already exists

  return (dispatch) => {
    axios
      .post('http://localhost:3000/api/v1/users/signup', user)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('loggedIn', true);
        if (res.status === 'success') {
          toast.success('Sign up successfully', {
            position: toast.POSITION.BOTTOM_RIGHT_CORNER
          });
        }
        dispatch({
          type: 'SIGN_UP',
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.response);
        toast(err.response.data.error.name, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
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
      .post('http://localhost:3000/api/v1/users/login', loginCredintials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('loggedIn', true);
        if (res.status === 'success') {
          toast.success('Sign up successfully', {
            position: toast.POSITION.BOTTOM_RIGHT_CORNER
          });
        }
        dispatch({
          type: 'LOG_IN',
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.response);
        toast(err.response.data.error.name, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };
};
