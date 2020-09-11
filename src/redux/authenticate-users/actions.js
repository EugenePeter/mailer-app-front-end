import {AuthTypes} from './types';
import { auth } from '../../api/users'

export const authStart = () => {
    return async (dispatch, state) => {
        const result =  await auth()
        const socket = state().loginDetails.socket
        const { user } = result.data

        console.log('socket test',socket);
        console.log('user tes',user)

        switch(user.role){
            case 'user':
                socket.emit('join_room',user.id);
                break;
            case 'admin':
                socket.emit('join_private', user.role);
                break;
            default: break;
        }

        dispatch(authSucess(result))
    }
}

export const authSucess = value => ({
    type: AuthTypes.AUTH_SUCCESS,
    payload: value
})