import axios from 'axios';

// Set up Axios instance to make requests to Django backend
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',  // The Django server address
});

export default api;
