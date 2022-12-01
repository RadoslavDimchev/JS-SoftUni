import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password) {
  const { _id, email: responseEmail, accessToken } = await post('/users/login', { email, password });

  setUserData({
    id: _id,
    email: responseEmail,
    accessToken
  });
}

export async function register(email, password) {
  const { _id, email: responseEmail, accessToken } = await post('/users/register', { email, password });

  setUserData({
    id: _id,
    email: responseEmail,
    accessToken
  });
}

export function logout() {
  get('/users/logout');
  clearUserData();
}