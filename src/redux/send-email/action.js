import {SendMailTypes} from './types';
import { sendEmail } from '../../api/email';


export const sendEmailStart = (value) => {
    
    return async dispatch => {
        dispatch(sendingEmail())
        const result = sendEmail(value)
        console.log("///// from send email api", result)
        // dispatch(sendSuccess(result))
    }
}

export const sendingEmail = () => ({
    type: SendMailTypes.SEND_EMAIL_START
})

export const sendSuccess = value => ({
    type: SendMailTypes.SEND_EMAIL_SUCCESS,
    // payload: value
})
