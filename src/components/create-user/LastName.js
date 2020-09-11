import React from 'react';

import {
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/form.styles";

const LastName = (props) => {
    const {handleChange , lastname} = props
console.log(LastName)

    return (
        <GroupContainer>
            <FormInput
            name="lastname"
            type="text"
            label="lastname"
            onChange={handleChange}
            value={lastname}
            />
            <ErrorMessage></ErrorMessage>
            <FormInputSpan value={lastname} >Last Name</FormInputSpan>
        </GroupContainer>
    )
}

export default LastName