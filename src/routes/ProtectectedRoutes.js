import React from 'react';
import {Route} from 'react-router-dom'

const ProtectedRoutes = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render = {() => 
            (<Component />)}
        />
    )
}

export default ProtectedRoutes;
