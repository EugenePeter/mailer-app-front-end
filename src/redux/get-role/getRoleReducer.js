import { GetRoleTypes } from './getRoleTypes'

const INITIAL_STATE = {
    personalDetails: []
}

const getRoleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GetRoleTypes.GET_ROLE_SUCCESS:
            return {
                ...state,
                personalDetails: action.payload
        }
        default:
            return state
    }
}

    
export default getRoleReducer;