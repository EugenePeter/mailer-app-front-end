import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title } from "../../global-styles/styles";

import { sendEmailStart, sendSuccess } from "../../redux/send-email/action";

import {
    FormContainer,
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
    FormTextArea,
} from "../../global-styles/form.styles";
import { GlobalButton } from "../../global-styles/button.styles";

import { LoaderCircle } from "../loader/loader";

const ComposeEmail = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user);
    const socket = useSelector((state) => state.loginDetails.socket);
    const sending_message = useSelector((state) => state.email.sending_message);
    const message_sent = useSelector((state) => state.email.message_sent);

    const { id } = { ...userId };
    const [state, setState] = useState({
        to: "",
        from: "",
        subject: "",
        body: "",
    });

    console.log("ussssseeer Id", id);

    useEffect(() => {
        socket.on("email_status", async (data) => {
            // await dispatch(sendSuccess(data))
            console.log("from socket", data);
            switch (data) {
                case "SENDING":
                    break;
                case "SENT":
                    dispatch(sendSuccess());
                    return;
                default:
                    break;
            }
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { to, from, subject, body } = state;
        dispatch(
            sendEmailStart({
                user_id: id,
                to,
                from,
                subject,
                text: body,
            })
        );
    };

    console.log("////// from  is sending message", sending_message);

    return (
        <>
            {sending_message === true && <LoaderCircle />}
            <FormContainer>
                {sending_message === false && (
                    <>
                        <Title>
                            <h2>Email</h2>
                        </Title>
                        {message_sent === true && <h2>EMAIL SENT</h2>}
                        <GroupContainer>
                            <FormInput
                                name="from"
                                type="email"
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
                                type="email"
                                label="to"
                                value={state.to}
                                onChange={handleChange}
                            />
                            <FormInputSpan value={state.to}>To</FormInputSpan>
                        </GroupContainer>
                        <GroupContainer>
                            <FormInput
                                name="subject"
                                type="text"
                                label="subject"
                                value={state.subject}
                                onChange={handleChange}
                            />
                            <FormInputSpan value={state.subject}>
                                Subject
                            </FormInputSpan>
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
                            <FormInputSpan value={state.body}>
                                {" "}
                                Type email here
                            </FormInputSpan>
                        </GroupContainer>
                        <ButtonWrapper>
                            <GlobalButton onClick={handleSubmit} signin>
                                Submit
                            </GlobalButton>
                        </ButtonWrapper>
                    </>
                )}
            </FormContainer>
        </>
    );
};

export default ComposeEmail;
