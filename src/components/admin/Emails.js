import React from 'react';

import {
    Strip,
    StripContainer,
    Wrapper,
} from "./Emails.styles";

const Emails = ({details}) => {
    const { full_name, subject, text, created_date } = details;
    console.log("/////trrrwrwfr/", details)
    const date = new Date(created_date).toDateString()
    return (
        <StripContainer>
            <Strip>
                <Wrapper>
                    <h5>{full_name}</h5>
                </Wrapper>
                <Wrapper>
                    <h5>{subject}</h5>
                    <small> {text}...</small>
                </Wrapper>
                <Wrapper>
                    <h5>{date}</h5>
                </Wrapper>
            </Strip>
        </StripContainer>
    )
}

export default Emails;