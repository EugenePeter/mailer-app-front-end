import axios from 'axios';

export const sendEmail = async (value) => {
    const result = await axios.post("http://10.111.2.65:7676/emails ", {
        value
    })
    return result;
}

export const getEmailsAsync = async (value) => {
    const result = await axios.get("http://10.111.2.65:7676/emails")
    return result.data;
}
