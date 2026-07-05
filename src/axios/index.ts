import axios from "axios";

const apiUrl = 'http://localhost:8000/api';
export const imageUrl = 'http://localhost:8000/storage';

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
    },
});

// 🟡 Interceptor reads latest lang from localStorage before every request
api.interceptors.request.use((config) => {
    const lang = localStorage.getItem('language') || 'en';
    config.headers['Accept-Language'] = lang;
    return config;
});

export default api;
