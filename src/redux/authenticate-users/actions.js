import {AuthTypes} from './types';
import { auth } from '../../api/users'
import io from 'socket.io-client';

import {loginSuccess} from '../../redux/login/login.action'
export const authStart = () => {
    return async (dispatch, state) => {
        const result =  await auth()
        // const socket = state().loginDetails.socket
        const { user } = result.data

        // console.log('socket test',socket);
        console.log('auth res',result.data)

    const sockets = io(`http://10.111.2.100:3000?access_token=${result.data.token}`);
    console.log('sockesss res',sockets)

        switch(user.role){
            case 'user':
                sockets.emit('join_room',user.id);
                break;
            case 'admin':
                sockets.emit('join_private', user.role);
                break;
            default: break;
        }

        dispatch(authSucess(result))
        dispatch(loginSuccess({...result.data , sockets}))
    }
}

export const authSucess = value => ({
    type: AuthTypes.AUTH_SUCCESS,
    payload: value
})

