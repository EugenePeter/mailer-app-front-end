import {AuthTypes} from './types';

const INITIAL_STATE = {
    auth: {}
}

const authReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AuthTypes.AUTH_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload.data
            }
        default:
            return state
    }
}

export default authReducer;