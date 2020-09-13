import { combineReducers } from "redux";

import createUserReducer from "./create-user/createUserReducer";
import getRoleReducer from "./get-role/getRoleReducer";
import loginReducer from "./login/login.reducer";
import authReducer from "./authenticate-users/reducer";
import getUserReducer from "./get-user/reducer";
import sendEmailReducer from "./send-email/reducer";
import getEmailsReducer from "./get-emails/reducer";
import allowUserReducer from "./allow-user/reducer";

const rootReducer = combineReducers({
    createUserReducer: createUserReducer,
    getRoles: getRoleReducer,
    loginDetails: loginReducer,
    auth: authReducer,
    user: getUserReducer,
    email: sendEmailReducer,
    emailList: getEmailsReducer,
    allowed_user: allowUserReducer,
});

export default rootReducer;
