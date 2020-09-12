import {UpdatePassword} from './types';
import { updatePasswordAsync } from '../../api/users';

export const updatePasswordStart = () => {
    return async dispatch => {
        const response = updatePasswordAsync()
        dispatch(updatePasswordSuccess())
    }
}

export const updatePasswordSuccess = () => ({
    type: UpdatePassword.UPDATE_PASSWORD_SUCCESS
})