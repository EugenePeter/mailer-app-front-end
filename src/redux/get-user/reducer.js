import { GetUsers } from './type'

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
        default:
            return state
    }
}

    
export default getUserReducer;