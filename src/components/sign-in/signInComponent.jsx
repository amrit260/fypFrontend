import React, { useState } from 'react'
import FormInput from '../formInput/formInputComponent';
import { Link } from 'react-router-dom'
import './signInStyles.css'
import { login } from 'src/redux/auth/authAction';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

const SignIn = () => {

    const [user, setUser] = useState({});
    const dispatch = useDispatch();


    handleChange = (e) => {
        const { name, value } = e.target
        setUser({ [name]: value }, () => console.log(user))
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(login(user))

    }


    return <React.Fragment>


        <div className="signIn-container">{window.scrollTo(500, 0)}



            <div className="form-content">
                <h5 className="title text-uppercase text-primary">Sign In</h5>
                <p className="text">Sing in with your email and password</p>
                <form onSubmit={handleSubmit} className='form-group'>

                    <FormInput type='text' label='Email' placeholder='Email' name='email' onChange={handleChange} required />
                    <FormInput type='password' label='Password' placeholder='Password' onChange={handleChange} name='password' required />
                    <button className="btn  mt-1 btn-warning" type="submit">Sign In</button>



                </form>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <p className="text text-center">Or</p>

                    <p type='button' className="text text-center">Or</p>
                    <Link to='/signup'>     <p className="text text-primary text-center">Create new account</p>
                    </Link>
                </div>
            </div>
        </div>

    </React.Fragment>



}


export default SignIn