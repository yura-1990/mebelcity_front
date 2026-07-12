import axios from "axios";

const apiUrl = 'https://adminpanel.mebelcity.uz/api';
export const imageUrl = 'https://adminpanel.mebelcity.uz/storage';

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
