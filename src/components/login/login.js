import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
       
    })

    const handelChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const login = () =>{
        axios.post("https://privatebusbackend.onrender.com/login", user)
        .then(res => {
            console.log(res);
            // setLoginUser(res.data.user);
            // console.log(res.data.user._id);
            if(res.data.message ==='Login successfull'){
                // alert(res.data.user._id);
                navigate(`/SearchDate/${res.data.user._id}`);
                // navigate('/SearchDate');
            }else{
                alert(res.data.message);

            }
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Enter your Email'
                name='email'
                values={user.email}
                onChange={handelChange}
            ></input>
            <input
                type='password'
                placeholder='Enter your Password'
                name='password'
                values={user.password}
                onChange={handelChange}
            ></input>
            <div className='button' onClick={login}>Login</div>
            
        </div>
    )
}

export default Login
