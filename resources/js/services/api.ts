import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.APP_URL/'api/',
});

export const login = async (credentials) => {
   return instance.post('login', credentials);
}
