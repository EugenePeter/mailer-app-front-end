import React from 'react';

import {
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/form.styles";

const Email = (props) => {
    const {handleChange , email} = props

    return (
        <GroupContainer>
            <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            onChange={handleChange}
            />
            <ErrorMessage></ErrorMessage>
            <FormInputSpan value={email} >email</FormInputSpan>
        </GroupContainer>
    )
}

export default Email