import { GetEmails } from './types';
import { bindActionCreators } from 'redux';

const INITIAL_STATE = {
    emails: []
}

const getEmailsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GetEmails.GET_EMAILS_START:
            return {
                ...state,
                
            }
        case GetEmails.GET_EMAILS_SUCCESS:
            return {
                ...state,
                emails: action.payload
                }
        default: 
            return state
    }
}

export default getEmailsReducer

