import React, {useEffect} from 'react';

import {useDispatch, useSelector } from "react-redux"

import LeftSideBarInner from '../components/bars/LeftSideBarInner';
import UserPanel from '../components/user/UserPanel';

import {authStart} from '../redux/authenticate-users/actions'

import { 
    ThreeColumns,
    LeftSideBar,
    MiddleBar,
    RightSideBar, 
    Headline,
    TextWrapper
} from '../global-styles/columns.styles'


const User = ({socket}) => {
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {
        dispatch(authStart())
    }, [])
    
    const id = useSelector(state => state.auth.id)
    console.log("///////isdddddd", id)
    

// socket.emit()

    return (

        <ThreeColumns>
            <LeftSideBar>
                <LeftSideBarInner />
            </LeftSideBar>
            <MiddleBar>
                <UserPanel />
            </MiddleBar>
        </ThreeColumns>
    )
}

export default User;