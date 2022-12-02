import { clearUserData, getUserData } from '../util.js';


const host = 'http://localhost:3030';

async function request(method, url, data) {
  const options = {
    method,
    headers: {}
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();
  if (userData) {
    options.headers['X-Authorization'] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (response.status === 204) {
      return response;
    }

    const result = await response.json();

    if (!response.ok) {
      if (response.status === 403) {
        clearUserData();
      }
      throw new Error(result.message);
    }

    return result;

  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');