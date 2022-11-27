import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function register(email, password, username) {
  const data = await post('/users/register', { email, password, username });

  const userData = {
    accessToken: data.accessToken,
    id: data._id,
    username: data.username
  };
  setUserData(userData);
}

export async function login(email, password) {
  const data = await post('/users/login', { email, password });

  const userData = {
    accessToken: data.accessToken,
    id: data._id,
    username: data.username
  };
  setUserData(userData);
} 

export function logout() {
  get('/users/logout');
  clearUserData();
}