import * as request from "./requester";

export const login = (email, password) =>
  request.post('/users/login', { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch('/users/logout', {
      headers: {
        'X-Authorization': accessToken
      }
    });

    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const register = (email, password) =>
  request.post('/users/register', { email, password });