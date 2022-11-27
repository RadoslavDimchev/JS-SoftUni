import { getUserData, clearUserData } from '../util.js';


const host = 'http://localhost:3030';

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status === 403) {
        clearUserData();
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

function createOptions(method, data) {
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

  return options;
}

export const get = async (url) => request(url, createOptions('get'));
export const post = async (url, data) => request(url, createOptions('post', data));
export const put = async (url, data) => request(url, createOptions('put', data));
export const del = async (url) => request(url, createOptions('delete'));