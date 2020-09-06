import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SwitchToggle from "../switch-toggle/SwitchToggle";

import {
    Strip,
    StripContainer,
    Wrapper,
    StyledLink,
    Toggle,
    Label,
    View,
    ToggleContainer,
    UpdatePassWord,
    ButtonsWrapper,
    Form,
} from "./Users.styles";

import { deleteUserStart } from "../../redux/delete-user/action";
import { deleteUser } from "../../redux/get-user/action";
import { updatePasswordStart } from "../../redux/update-password/action";

const AllUsers = ({ details }) => {
    const dispatch = useDispatch();
    // const { first_name, email_address, id, role} = details;
    const [newPassword, setNewPassword] = useState("");
    const socket = useSelector((state) => state.loginDetails.sockets);
    const userType = useSelector((state) => state.loginDetails.role);

    console.log("/////////", details);

    const [toggle, setToggle] = useState(false);
    const toggleCheck = () => setToggle((value) => !value);

    console.log(toggle);

    const handleNewPassword = (e) => {
        const { value } = e.target;
        setNewPassword(value);
    };

    const handleNewPasswordSubmit = (e) => {
        e.preventDefault();
        // dispatch(updatePasswordStart({ id, newPassword }));
        alert(newPassword);
        setNewPassword("");
    };

    console.log("new pasword", newPassword);

    const handleDelete = async () => {
        //     console.log(id)
        //    await dispatch(deleteUserStart(id))
        //    dispatch(deleteUser(id))
        //    socket.emit("delete_user", {
        //     user_data: details,
        //     role: userType
        //    })
    };

    return (
        <StripContainer>
            <Strip>
                <Wrapper>
                    <h5>first name</h5>
                </Wrapper>
                <Wrapper>
                    <h5>Email</h5>
                    <small>test@email.com</small>
                </Wrapper>
                <Wrapper>
                    <h5>Role</h5>
                    <small>admin</small>
                </Wrapper>
                <Wrapper>
                    <h5>active</h5>
                    <SwitchToggle handleChange={toggleCheck} checked={toggle} />
                </Wrapper>
                <Wrapper>
                    <ButtonsWrapper>
                        <Form onSubmit={handleNewPasswordSubmit}>
                            <UpdatePassWord
                                onChange={handleNewPassword}
                                placeholder="update password"
                                value={newPassword}
                            ></UpdatePassWord>
                        </Form>

                        <View onClick={handleDelete}>
                            <small>delete</small>
                        </View>
                    </ButtonsWrapper>
                </Wrapper>
            </Strip>
        </StripContainer>
    );
};

export default AllUsers;
