import { UpdatePassword } from "./types";
import { updatePasswordStart } from "./action";

const INITIAL_STATE = {};

const updatePassWordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UpdatePassword.UPDATE_PASSWORD_START:
            return {
                ...state,
            };

        case UpdatePassword.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default updatePassWordReducer;
