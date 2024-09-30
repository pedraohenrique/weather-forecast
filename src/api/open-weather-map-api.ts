import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';
axios.defaults.params = { appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY };

export const weatherApi = axios;
