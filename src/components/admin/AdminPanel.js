import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Route, Switch, useLocation } from "react-router-dom";

import Emails from "./Emails";
import AddUser from "./AddUsers";
import AllUsers from "./Users";
import { EmailsContainer } from "./Emails.styles";

import { getUsers } from "../../redux/get-user/action";

import { Wrapper } from "./Users.styles";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.user.isFetching);
    const email_list = useSelector((state) => state.emailList.emails);
    const users = useSelector((state) => state.user.user_list);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    console.log("///// users", users);

    const location = useLocation().pathname;
    return (
        <Switch>
            <Route path="/admin/emails">
                {email_list.map((email) => (
                    <Emails key={email.id} details={email} />
                ))}
            </Route>
            <Route path="/admin/add-users">
                <AddUser />
            </Route>
            <Route path="/admin/users">
                {users.map((user) => (
                    <AllUsers key={user.id} details={user} />
                ))}
                <AllUsers />
                <AllUsers />
                <AllUsers />
            </Route>
            {/* <Wrapper>
                <h5> update password </h5>
                <input type="text" value="test" placeholder="update-password" />
            </Wrapper> */}
        </Switch>
    );
};

export default AdminPanel;
