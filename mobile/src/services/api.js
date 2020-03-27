import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.22.172.243:3333'
});

export default api; 