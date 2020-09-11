
import { GetRoleTypes } from './getRoleTypes'
// import getRolesApi from '../../api/getRoles';
import {list} from '../../api/roles';

// export const createUserAction = (value) => ({
//     type: getRoleTypes.GET_ROLE_START,
//     value
// })


export const getRolesStart = () => {
    return async dispatch => {
        
        const value = await list()
        
        dispatch(getRolesAsync(value.data));
    };
}



export const getRolesAsync = value =>  ({
    type: GetRoleTypes.GET_ROLE_SUCCESS,
    payload: value
})