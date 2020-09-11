import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Headline,
    TextWrapper
} from '../../global-styles/columns.styles';

import { StyledLink } from "../../global-styles/navLink.styles";

import {
    ChannelIcons,
    SideBarItems,
    Title,
    AddChannelIcon,
    SideBarWrapper,
} from "../../components/bars/LeftSideBarInner.styles";

import {getEmailsStart} from '../../redux/get-emails/action';


const LeftSideBarInner = () => {
    const dispatch = useDispatch()
    const details =  useSelector(state => state.auth.user)
    const socket =  useSelector(state => state.loginDetails.socket)

    console.log("eeeeeeeee", details)
    const { role } = {...details};

    const handleClick = () => {
        console.log("/////// im click")
        socket.on("new_user_registered", data => {
            console.log(data)
        })
    }

    const handleViewEmailClick = async () => {
        await dispatch(getEmailsStart())
        socket.on("new_sent_email", data => {
            console.log(data)
        })
    }

    return (
       <>
            <Headline>
                <h2>{`{ DNA: Micro}`}</h2>
                <h3>{role} </h3>
            </Headline>
            {
                role === 'admin' &&
                    <>
                    <StyledLink to="/admin/add-users" admin="true">
                        <SideBarItems left>
                            <ChannelIcons />
                            <h6>create users</h6>
                        </SideBarItems>
                    </StyledLink>
                    <StyledLink to="/admin/users" admin="true" onClick={handleClick}>
                        <SideBarItems left>
                            <ChannelIcons />
                            <h6>view users</h6>
                        </SideBarItems>
                    </StyledLink>
                    <StyledLink to="/admin/emails" admin="true" onClick={handleViewEmailClick}>
                        <SideBarItems left>
                            <ChannelIcons />
                            <h6>sent emails</h6>
                        </SideBarItems>
                    </StyledLink>
                    </>
            }

            {
                role === 'user' &&
                <>
                    <StyledLink to="/user/compose-email">
                        <SideBarItems left>
                            <ChannelIcons />
                            <h6>compose email</h6>
                        </SideBarItems>
                    </StyledLink>
                </>
            }


            <TextWrapper>
         
            </TextWrapper>
       </>
    )
}

export default LeftSideBarInner