import axios from 'axios';

const getRolesApi = async () => {
    const result = await axios.get("http://10.111.2.65:7676/roles")
    return result;
}

export default getRolesApi;