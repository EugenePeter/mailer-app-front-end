
import axios from 'axios';
import { LoginTypes } from './login.types'
import {login} from '../../api/users';
import io from 'socket.io-client';


export const loginStart = (value) => {
    console.log(value)
    return async (dispatch, getState) => {
        const result = await login(value)
        // console.log('s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', value)

        const socket = io(`http://10.111.2.100:3000?access_token=${result.data.token}`);
        // socket.connect();
        console.log(result.data ,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
       dispatch(loginSuccess({...result.data, socket}));
    };
}

export const loginSuccess = value =>  ({
    type: LoginTypes.LOGIN_SUCCESS,
    payload: value
})