import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';


export async function login(username, password) {
  const { _id, username: responseUsername, accessToken } = await post('/users/login', { username, password });

  setUserData({
    id: _id,
    username: responseUsername,
    accessToken
  });
}

export async function register(username, password) {
  const { _id, username: responseUsername, accessToken } = await post('/users/register', { username, password });

  setUserData({
    id: _id,
    username: responseUsername,
    accessToken
  });
}

export async function logout() {
  get('/users/logout');
  clearUserData();
}