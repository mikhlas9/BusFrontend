import React, { useState } from 'react';
import axios from 'axios';
import {Link ,useNavigate} from 'react-router-dom';
import "./register.css";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handelChange =(e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value}); 
    }


    const register = () => {
        const {email, password, reEnterPassword} = user;
        if(email && password && (password === reEnterPassword)){
           
            axios.post("https://privatebusbackend.onrender.com/register", user)
            .then(res => {
                console.log(res);
                alert(res.data.message);
            })
            .catch(function (error) {
                console.log(error);
              });
              
        }else{
            alert("invalid input");
        }
    }
    return (
        <div className='register'>
        {/* {console.log("user", user)} */}
            <h1>Register</h1>
            {/* <label class="form-label">Username</label> */}
            <input
                type='text'
                placeholder='Your Email'
                name='email'
                values={user.email}
                onChange={handelChange}
            ></input>
            <input
                type='password'
                placeholder='Your Password'
                name='password'
                values={user.password}
                onChange={handelChange}
            ></input>
            <input
                type='password'
                placeholder='Re-enter Password'
                name='reEnterPassword'
                values={user.reEnterPassword}
                onChange={handelChange}
            ></input>
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={() => navigate("/login")} >Login</div>
        </div>
    )
}

export default Register
