import { GetUsers } from './type';
import {findUsers} from './utils';

const INITIAL_STATE = {
    user_list: [],
    is_fetching: true,
}

const getUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GetUsers.GET_USERS_SUCCESS:
            return {
                ...state,
                user_list: action.payload.data.list,
                is_fetching: false
        }
        case GetUsers.NEW_USERS_SUCCESS:
            console.log("user list", action.payload)
            return {
                ...state,
                user_list: [...state.user_list, action.payload]
        }
        case GetUsers.DELETE_USERS:
            return {
                ...state,
                user_list: findUsers(action.payload, state.user_list)
            }
        default:
            return state
    }
}

    
export default getUserReducer;