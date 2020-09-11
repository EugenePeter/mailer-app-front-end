import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import LeftSideBarInner from '../components/bars/LeftSideBarInner';
import AdminPanel from '../components/admin/AdminPanel';
import RightSideBarInner from '../components/bars/RightSideBarInner';

import {authStart} from '../redux/authenticate-users/actions'

import { 
    ThreeColumns,
    LeftSideBar,
    MiddleBar,
    RightSideBar, 
    Headline,
    TextWrapper
} from '../global-styles/columns.styles'



const Admin = () => {
    const dispatch = useDispatch();

    // socket.emit()

    useEffect(() => {
        dispatch(authStart())
    }, [])

    return (
        <ThreeColumns>
            <LeftSideBar>
                <LeftSideBarInner />
            </LeftSideBar>
            <MiddleBar>
                <AdminPanel />
            </MiddleBar>
            {/* <RightSideBar>
            
            </RightSideBar> */}
        </ThreeColumns>
    )
}

export default Admin