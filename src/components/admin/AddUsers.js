import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import FirstName from '../create-user/FirstName';
import LastName from '../create-user/LastName';
import Email from '../create-user/Email';
import Password from '../create-user/Password';
import Role from '../create-user/Role'

import {Title} from "../../global-styles/styles";

import {
    FormContainer,
    ButtonWrapper,

} from "../../global-styles/form.styles";
import { GlobalButton } from "../../global-styles/button.styles";

import { getRolesStart } from '../../redux/get-role/getRolesActions';
import { addUsersStart } from '../../redux/create-user/createUserActions'

const AddUser = (props) => {
    const dispatch = useDispatch()
    const roles = useSelector(state => state.getRoles.personalDetails)

    useEffect(() => {
        dispatch(getRolesStart())
    }, [])
    
    let personalDetails = {}

    const handleChange = (e) => {
        const {value, name} = e.target
        personalDetails = {
            ...personalDetails,
            [name]: value
        }
        console.log(personalDetails)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const {firstname, lastname, email, password, role} = personalDetails
        dispatch(addUsersStart({firstname, lastname, email, role, password}))
    }



    return (
        <FormContainer>
            <Title>
                <h2>Create New Users</h2> {""}
            </Title>
            <FirstName 
                handleChange={handleChange} 
                firstname={personalDetails.firstname}
            />
            <LastName 
                handleChange={handleChange} 
                lastname={personalDetails.lastname}
            />
            <Email 
                handleChange={handleChange} 
                email={personalDetails.email}  
            />
            <Role 
                handleChange={handleChange} 
                role={personalDetails.role} 
                roles={roles}
            />
            <Password 
                handleChange={handleChange} 
                password={personalDetails.password}
            />
            <ButtonWrapper>
                <GlobalButton onClick={handleClick} signin>
                Create User
                </GlobalButton>
            </ButtonWrapper>
        </FormContainer>
    );
}


export default AddUser;
