import React, {useState} from 'react';

import {Link} from 'react-router-dom'

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

const AllUsers = ({details}) => {

    const { first_name, email_address, role} = details;

    console.log("/////////", details)

    const [toggle, setToggle] = useState(false)
    const toggleCheck = () => setToggle(value => !value)
    console.log(toggle)
    const handleChange = (e) => {
        const {value} = e.target
        setToggle(!value)
        console.log(value)
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
                    {/* <Wrapper>
                        <ToggleContainer>
                            <h5>Action</h5>
                            <Toggle type="checkbox" onChange={toggleCheck} id="switch" checked={toggle}/>
                            <Label for="switch">Toggle</Label>
                        </ToggleContainer>
                    </Wrapper> */}
                    <Wrapper>
                        <View><small>change password</small></View>
                    </Wrapper>
                    <Wrapper>
                        <View><small>delete</small></View>
                    </Wrapper>
                </Strip>
            </StripContainer>
    )
}

export default AllUsers;