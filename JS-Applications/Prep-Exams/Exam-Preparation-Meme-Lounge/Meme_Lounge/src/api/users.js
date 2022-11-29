import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';


export async function login(email, password) {
  const data = await post('/users/login', { email, password });

  const userData = {
    id: data._id,
    username: data.username,
    email: data.email,
    gender: data.gender,
    accessToken: data.accessToken
  };

  setUserData(userData);
  return userData;
}

export async function register(username, email, password, gender) {
  const data = await post('/users/register', { username, email, password, gender });

  const userData = {
    id: data._id,
    email: data.email,
    username: data.username,
    gender: data.gender,
    accessToken: data.accessToken
  };

  setUserData(userData);
  return userData;
}

export function logout() {
  get('/users/logout');
  clearUserData();
}