import React, {useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';

import {Link} from 'react-router-dom';
import SwitchToggle from '../switch-toggle/SwitchToggle';

import {
    Strip,
    StripContainer,
    Wrapper,
    StyledLink,
    Toggle,
    Label,
    View,
    ToggleContainer
} from "./Users.styles";

import { deleteUserStart } from '../../redux/delete-user/action';
import {deleteUser} from '../../redux/get-user/action'

const AllUsers = ({details}) => {
    const dispatch = useDispatch()
    const { first_name, email_address, id, role} = details;
    const socket = useSelector(state => state.loginDetails.sockets)
    const userType = useSelector(state => state.loginDetails.role)

    console.log("/////////", details)

    const [toggle, setToggle] = useState(false)
    const toggleCheck = () => setToggle(value => !value)

    console.log(toggle)

    const handleNewPassword = () => {
        
    }
    
    const handleDelete = async () => {
        console.log(id)
       await dispatch(deleteUserStart(id))
       dispatch(deleteUser(id))
       socket.emit("delete_user", {
        user_data: details,
        role: userType
       })
    }






    return (
            <StripContainer>
                <Strip>
                    <Wrapper>
                        <h5>{first_name} </h5>
                    </Wrapper>
                    <Wrapper>
                        <h5>Email</h5>
                        <small>{email_address} </small>
                    </Wrapper>
                    <Wrapper>
                        <h5>Role</h5>
                        <small>{role} </small>
                    </Wrapper>
                    <Wrapper>
                        <h5>active</h5>
                     <SwitchToggle handleChange={toggleCheck} checked={toggle} />
                    </Wrapper>
                    <Wrapper>
                        <View onClick={handleNewPassword}><small>change password</small></View>
                    </Wrapper>
                    <Wrapper>
                        <View onClick={handleDelete}><small>delete</small></View>
                    </Wrapper>
                </Strip>
            </StripContainer>
    )
}

export default AllUsers;