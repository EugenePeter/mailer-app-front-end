import { LoginTypes } from './login.types'

const INITIAL_STATE = {
    
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LoginTypes.LOGIN_SUCCESS:
            console.log("aaaaaaaa", action)
            return {
                ...state,
                ...action.payload
        }
        default:
            return state
    }
}

export default loginReducer