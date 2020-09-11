import React from 'react';

import {
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/form.styles";

const FirstName = (props) => {
    const {handleChange , firstname} = props
console.log(firstname)

    return (
        <GroupContainer>
            <FormInput
            name="firstname"
            type="text"
            label="firstname"
            onChange={handleChange}
            value={firstname}
            />
            <ErrorMessage></ErrorMessage>
            <FormInputSpan value={firstname} >firstname</FormInputSpan>
        </GroupContainer>
    )
}

export default FirstName