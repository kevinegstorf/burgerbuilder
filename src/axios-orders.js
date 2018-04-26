import axios from 'axios';
import ENDPOINT from './endpoints';

const instance = axios.create({
    baseURL: ENDPOINT
});

export default instance;