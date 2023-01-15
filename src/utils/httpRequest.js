import axios from 'axios';
import storeInit from "../redux/store"

const httpRequest = async (url, method = 'get', body = null, others) => {
    const token = storeInit.store.getState()?.user?.token
   
    try {
        const response = await axios({
            url,
            method,
            data: body,
            headers: {
                Authorization: `Bearer ${token}`,
              },
            ...others,
        });
        return response?.data;
    } catch (error) {
        return error.response;
    }
};

export default httpRequest;