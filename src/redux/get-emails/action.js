import { GetEmails } from './types';
import { getEmailsAsync } from '../../api/email'

export const getEmailsStart = () => {
    console.log("//////fyouuuuuu")
    return async dispatch => {
        const response = await getEmailsAsync();
        console.log("//////fetchced emails", response)
        dispatch(getEmailsSuccess(response))
    }
}

export const getEmailsSuccess = value => ({
    type: GetEmails.GET_EMAILS_SUCCESS,
    payload: value
})