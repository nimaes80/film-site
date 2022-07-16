import axios from 'axios';
import urls from './urls';




const requests = axios.create({
    baseURL: urls.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'content-type': 'application/json',
        'ContentType': 'application/json',
        

    },
    data: {},
});



export default requests;

