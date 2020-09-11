import axios from 'axios';

const addUsersAPi = async (value) => {
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

export default addUsersAPi;