import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <Route {...rest}>
            {isAuthenticated ? <Component /> : <Redirect to="/" />}
        </Route>
    );
};

export default ProtectedRoutes;
