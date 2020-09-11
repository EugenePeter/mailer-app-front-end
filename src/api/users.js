import axios from 'axios';
import Cookies from 'js-cookie';

export const create = async (value) => {
    console.log("/////////value from add users")
    console.log(value)
    const result = await axios.post("http://10.111.2.65:7676/users", {
        first_name: value.firstname,
        last_name: value.lastname,
        email_address: value.email,
        role: value.role,
        password: value.password
    })

    console.log(result)
    return result;
}

export const login = async (value) => {
    console.log("/////////value from add users")
    console.log(value)
    const result = await axios.post("http://10.111.2.65:7676/users/login ", {
        email_address: value.email,
        password: value.password
    })

    console.log("/////// cookieeesssssss", result)

    Cookies.set("token", result.data.token)

    console.log(Cookies.get("token"))
    return result;
}

export const auth = async (value) => {
    console.log("/////////value from add users")
    console.log(value)
    const token = Cookies.get("token")
    const result = await axios.get(`http://10.111.2.65:7676/auth/?token_id=${token}`)

    // const result = await axios.get(`http://10.111.2.65:7676/auth`,{
    //     withCredentials: true
    // })

    console.log(result)
    return result;
}

export const users = async (value) => {
    console.log("/////////value from add users")
    console.log(value)
    const result = await axios.get(`http://10.111.2.65:7676/users`)

    console.log(result)
    return result;
}



