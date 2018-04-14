import axios from 'axios';
import ENDPOINT from './endpoint';

const instance = axios.create({
    baseURL: ENDPOINT
});

export default instance;