import { CreateUser } from './createUserTypes'

const INITIAL_STATE = {
    personalDetails: ''
}

const createUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CreateUser.CREATE_USER_START:
            return {
            ...state,
            personalDetails: action.value
        }
        case CreateUser.CREATE_USER_SUCCESS:
            return {
                ...state,
        }
        default:
            return state
    }
}

    
export default createUserReducer;