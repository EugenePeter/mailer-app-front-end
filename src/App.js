import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Admin from "./pages/Admin";
import User from "./pages/User";
import ProtectedRoutes from "./routes/ProtectectedRoutes";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Header />
            </Route>
            <Route path="/user">
                <User />
            </Route>
            <ProtectedRoutes path="/admin" component={Admin} />
            <Route path="*" render={() => "404 NOT FOUND"} />
        </Switch>
    );
}

export default App;
