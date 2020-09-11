import { SendMailTypes } from './types'

const INITIAL_STATE = {
    sending_message: false,
    message_sent: false
}

const sendEmailReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SendMailTypes.SEND_EMAIL_START:
            // console.log('hihihihihi')
            return {
                ...state,
                sending_message: true
            }
        case SendMailTypes.SEND_EMAIL_SUCCESS:
            console.log("aaaaaaaa", action)
            return {
                ...state,
                sending_message: false,
                message_sent: true
        }
        default:
            return state
    }
}

export default sendEmailReducer;