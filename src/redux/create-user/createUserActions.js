import { CreateUser } from './createUserTypes'
import {create} from '../../api/users'

export const addUsersStart = (data) => {

    return async dispatch => {
        const value = await create(data)
        console.log("/////////")
        console.log(value)
        if(!value.data.success){
            dispatch(addUsersFail(value.data))
        }else{
            dispatch(addUsersSuccess(value.data));
        }

    };
}

export const addUsersSuccess = value =>  ({
    type: CreateUser.CREATE_USER_SUCCESS,
    payload: value
})

export const addUsersFail = value =>  ({
    type: CreateUser.CREATE_USER_FAILURE,
    payload: value
})

