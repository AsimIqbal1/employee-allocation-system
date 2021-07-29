import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import routes from '../../constants/routes';
import { LoginModel } from '../../models/loginModel';
import { signInUser } from '../../store/actions/authAction';
import './login.css'

const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginResponse = useSelector(state => state.auth.userData)

    useEffect(() => {
        //handle routing if login succeed
    }, [loginResponse])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = () => {
        dispatch(signInUser(LoginModel(username, password)));
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <p>Username: </p>
            <input type="text" onChange={handleUsernameChange}></input>
            <p>Password: </p>
            <input type="password" onChange={handlePasswordChange}></input>
            <br />
            <br />
            <button onClick={handleLoginSubmit}>LOGIN</button>
        </div>
    )
}

export default Login
