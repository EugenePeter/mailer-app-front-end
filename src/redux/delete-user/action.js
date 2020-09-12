import {DeleteUser} from './types';
import {deleteUserAsync} from '../../api/users'

export const deleteUserStart = (id) => {
    return async dispatch => {
        const response = deleteUserAsync(id);
        dispatch(deleteUserSuccess(response))
    }
}

export const deleteUserSuccess = value => ({
    type: DeleteUser.DELETE_USER_SUCCESS,
    payload: value
})