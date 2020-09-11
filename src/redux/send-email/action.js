import {SendMailTypes} from './types';
import { sendEmail } from '../../api/email';


export const sendEmailStart = (value) => {
    
    console.log("///// from send email actions", value)
    return async dispatch => {
        dispatch(sendingEmail())
        const result = sendEmail(value)
        dispatch(sendSuccess(result))
    }
}

export const sendSuccess = value => ({
    type: SendMailTypes.SEND_EMAIL_SUCCESS,
    payload: value
})

export const sendingEmail = () => ({
    type: SendMailTypes.SEND_EMAIL_START
})