import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../formInput/formInputComponent';
import { Link } from 'react-router-dom';
import { signUp } from '../../redux/auth/authAction';
import { useDispatch, useSelector } from 'react-redux';
import './signUpStyles.css';
import axios from 'axios';


const SignUp = () => {
    toast.configure()
    const state = useSelector(state => state);
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {

            toast.success('already logged inn', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            navigate(`/dashboard/app`);
        }

    })


    const dispatch = useDispatch();

    console.log(state.auth)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();


        dispatch(signUp(user))


        setUser({
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="signup-container">
            {window.scrollTo(500, 0)}
            <div className="form-content">
                <h5 className="title text-uppercase text-primary">Sign Up</h5>
                <p className="text">Create a new account</p>
                <form onSubmit={handleSubmit} className="form-group">
                    <FormInput
                        type="text"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                        required
                    />
                    <FormInput
                        type="password"
                        label="Confirm password"
                        placeholder="Confirm password"
                        value={user.passwordConfirm}
                        onChange={handleChange}
                        name="passwordConfirm"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                    <p className="text text-center">Already have an account?</p>
                    <Link to="/signin">
                        {' '}
                        <p className="text text-primary text-center">Login</p>{' '}
                    </Link>
                </form>
            </div>{' '}
        </div>
    );
};

export default SignUp;
