import axios from 'axios';

const loginUserApi = async (value) => {
    console.log("/////////value from add users")
    console.log(value)
    const result = await axios.post("http://10.111.2.65:7676/users/login ", {
        email_address: value.email,
        password: value.password
    })

    console.log(result)
    return result;
}

// const authetication = async (value) => {
//     console.log("/////////value from add users")
//     console.log(value)
//     const result = await axios.post("http://10.111.2.65:7676/users/login ", {
//         email_address: value.email,
//         password: value.password
//     })

//     console.log(result)
//     return result;
// }

export default {loginUserApi};