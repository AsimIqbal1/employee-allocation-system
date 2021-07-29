import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from '@material-ui/core';

import routes from '../../constants/routes';
import { LoginModel } from '../../models/loginModel';
import { signInUser } from '../../store/actions/authAction';
import './login.css'
import MaterialButton from '../../components/materialUI/button';
import MaterialTextField from '../../components/materialUI/textField/textField';
import MaterialPaper from '../../components/materialUI/paper/paper';
import MaterialTypography from '../../components/materialUI/typography/typography';
import { navigateTo } from '../../helpers/navigator';
import constants from '../../constants/stringConstants';
import { validateInput } from './validator';
import ErrorMessage from '../../components/errorMessage';

const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const loginResponse = useSelector(state => state.auth.userData)
    const isLoginResponseLoading = useSelector(state => state.auth.isLoading)
    const loginError = useSelector(state => state.auth.error)

    useEffect(() => {
        // if creds succeed, then redirect user to dashboard
        if (loginResponse?.length) navigateTo(props.history, routes.DASHBOARD)
        console.log('LR: ',loginResponse)
    }, [loginResponse])

    useEffect(() => {
        if (loginError) setError(loginError)
    }, [loginError])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = () => {
        const loginCreds = LoginModel(username, password);
        if(validateInput(loginCreds)){
            dispatch(signInUser(loginCreds));
        } else {
            setError(constants.errorMessages.INVALID_INPUTS.MESSAGE)
        }
    }

    return (
        <div className='root'>
            <MaterialPaper>
                <MaterialTypography text='LOGIN' varient='h2' />
                <MaterialTextField type="text" onChangeEvent={handleUsernameChange} label='Username'></MaterialTextField>
                <MaterialTextField type="password" onChangeEvent={handlePasswordChange} label='Password'></MaterialTextField>
                {error && <ErrorMessage message={error}/>}
                {isLoginResponseLoading ? <CircularProgress color="secondary" /> : <MaterialButton onClickEvent={handleLoginSubmit} />}
            </MaterialPaper>

        </div>
    )
}

export default Login
