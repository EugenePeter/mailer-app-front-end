import {GetUsers} from './type';

import {users} from '../../api/users';

export const getUsers = () => {
    
    return async dispatch => {
        const response = await users();
        console.log("//////get users", response)
        dispatch(getUsersSuccess(response))
    }
}

export const getUsersSuccess = value => ({
    type: GetUsers.GET_USERS_SUCCESS,
    payload: value
})