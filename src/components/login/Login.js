import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";


import { Title } from "../../global-styles/styles";

import {
    FormContainer,
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/form.styles";

import { GlobalButton } from "../../global-styles/button.styles";
import {loginStart} from '../../redux/login/login.action';
import { authStart } from '../../redux/authenticate-users/actions'


function Login(props) {
const dispatch = useDispatch()

    // const { loginUser, message, loginStatus, token, userName } = props;

    const status = useSelector(state => state.loginDetails.success)
    const userRole = useSelector(state => state.loginDetails.role)

    console.log("/////// from login", userRole )


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     dispatch(authStart())
    // }, [])

    const test = useParams;

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginStart({email, password}))
        // props.history.push("/admin");
    };

    useEffect(()=> {
        if(status) props.history.push(`/${userRole === 'admin' ? 'admin' : "user/compose-email"}`);
        // {userRole === 'admin' && "admin"}{userRole === 'user' && "user"}
    }, [status])
    
    console.log("//////status", status)

    return (
        <FormContainer>
            <Title>
                <h2>Please signin</h2> {""}
                <small>Getting there champ!</small>
            </Title>
            <GroupContainer>
                <FormInput
                    onChange={handleEmail}
                    name="email"
                    type="text"
                    value={email}
                    label="email"
                />
                <ErrorMessage></ErrorMessage>
                <FormInputSpan value={email}>email</FormInputSpan>
            </GroupContainer>
            <GroupContainer>
                <FormInput
                    onChange={handlePassword}
                    name="username"
                    type="password"
                    value={password}
                    label="username"
                />
                <FormInputSpan value={password}>Password</FormInputSpan>
            </GroupContainer>
            <ButtonWrapper>
                <GlobalButton onClick={handleSubmit} signin>
                    Sign In
                </GlobalButton>
            </ButtonWrapper>
        </FormContainer>
    );
}


export default withRouter(Login);
