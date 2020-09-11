import React from 'react';

import {
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
    Select
} from "../../global-styles/form.styles";

const Role = (props) => {
    const {handleChange, role, roles} = props

    return (
        <GroupContainer>
            <span >Account type</span>
            <Select name="role" onChange={handleChange}>
                <option value="" defaultValue disabled hidden>Choose here</option>
                <optgroup >
                    {
                        roles.map(role =>  <option key={role.id} value={role.name}>{role.name}</option>)
                    }
                </optgroup>
            </Select>
            <ErrorMessage></ErrorMessage>

        </GroupContainer>
    )
}
export default Role