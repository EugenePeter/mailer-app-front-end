import { UpdatePassword } from "./types";
import { updatePasswordAsync } from "../../api/users";

export const updatePasswordStart = (data) => {
    return async (dispatch) => {
        const response = updatePasswordAsync(data);
        dispatch(updatePasswordSuccess(response));
    };
};

export const updatePasswordSuccess = () => ({
    type: UpdatePassword.UPDATE_PASSWORD_SUCCESS,
});
