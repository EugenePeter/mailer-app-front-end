import axios from 'axios';

export const list = async () => {
    const result = await axios.get("http://10.111.2.65:7676/roles")
    return result;
}

// export default list;