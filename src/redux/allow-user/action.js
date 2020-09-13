import { UserAccess } from "./type";

import { allowUser } from "../../api/users";

export const allowUserEmail = (value) => {
    console.log("this is from client allow user email clicked!", value);
    return async (dispatch, getState) => {
        const response = await allowUser(value);
        console.log("//////allowUserEmail", response.data.details.changes[0].new_val);
        await dispatch(
            allowUserEmailSuccess(response.data.details.changes[0].new_val)
        );

        getState().loginDetails.sockets.emit("toggle_user", getState().allowed_user);
    };
};

export const allowUserEmailSuccess = (value) => ({
    type: UserAccess.ALLOW_USER_ACCESS_SUCCESS,
    payload: value,
});
