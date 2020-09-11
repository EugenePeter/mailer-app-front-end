import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Title } from "../../global-styles/styles";

import { sendEmailStart } from '../../redux/send-email/action'

import {
    FormContainer,
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
    FormTextArea
} from "../../global-styles/form.styles";
import { GlobalButton } from "../../global-styles/button.styles"
import socket from 'socket.io-client/lib/socket';


const ComposeEmail = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.user)
    const socket = useSelector(state => state.loginDetails.socket)
    const { id } = {...userId}
    const [state, setState] = useState({
        to: '',
        from: '',
        subject: '',
        body: '',
    })

    console.log("ussssseeer Id",  id)

    useEffect(()=> {
        socket.on("email_status", data => {
            console.log(data)
        })
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { to, from, subject, body} = state
        dispatch(sendEmailStart({
            user_id: id,
            to,
            from,
            subject,
            text: body
        }))
    }

    console.log("////// from compose email state",state)

    return (
        <FormContainer>
            <Title>
                <h2>Email</h2>
            </Title>
            <GroupContainer>
                <FormInput
                    name="from"
                    type="text"
                    label="from"
                    value={state.from}
                    onChange={handleChange}
                />
                <ErrorMessage></ErrorMessage>
                <FormInputSpan value={state.from}>From</FormInputSpan>
            </GroupContainer>
            <GroupContainer>
                <FormInput
                    name="to"
                    type="text"
                    label="to"
                    value={state.to}
                    onChange={handleChange}
                />
                <FormInputSpan value={state.to} >To</FormInputSpan>
            </GroupContainer>
            <GroupContainer>
                <FormInput
                    name="subject"
                    type="text"
                    label="subject"
                    value={state.subject}
                    onChange={handleChange}
                />
                <FormInputSpan value={state.subject} >Subject</FormInputSpan>
            </GroupContainer>
            <GroupContainer>
                <FormTextArea
                    name="body"
                    type="textbox"
                    label="body"
                    rows="90"
                    value={state.body}
                    onChange={handleChange}
                />
                <FormInputSpan value={state.body} > Type email here</FormInputSpan>
            </GroupContainer>
            <ButtonWrapper>
                <GlobalButton onClick={handleSubmit} signin>
                    Submit
                </GlobalButton>
            </ButtonWrapper>
        </FormContainer>
    )
}

export default ComposeEmail;