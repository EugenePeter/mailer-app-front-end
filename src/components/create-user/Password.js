import React from 'react';

import {
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/form.styles";

const Password = (props) => {
    const {handleChange , password} = props

    return (
        <GroupContainer>
            <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            onChange={handleChange}
            />
            <ErrorMessage></ErrorMessage>
            <FormInputSpan value={password}>password</FormInputSpan>
        </GroupContainer>
    )
}

export default Password