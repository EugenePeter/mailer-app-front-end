import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import ComposeEmail from './ComposeEmail';

const UserPanel = () => {
    const location = useLocation().pathname;
    return (
        <Switch>
            <Route path="/user/compose-email">
                    {location === "/user/compose-email" && <ComposeEmail />}
            </Route>
        </Switch>
    )
}

export default UserPanel;