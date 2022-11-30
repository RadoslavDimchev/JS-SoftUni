import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password) {
  const { _id: id, accessToken, email: emailResponse } = await post('/users/login', { email, password });

  setUserData({
    id,
    accessToken,
    email: emailResponse
  });
}

export async function register(email, password) {
  const { _id: id, accessToken, email: emailResponse } = await post('/users/register', { email, password });

  setUserData({
    id,
    accessToken,
    email: emailResponse
  });
}

export function logout() {
  get('/users/logout');
  clearUserData();
}