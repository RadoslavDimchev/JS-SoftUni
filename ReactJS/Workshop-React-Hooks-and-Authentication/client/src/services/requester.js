const BASE_URL = 'http://localhost:3030';

const request = async (method, url, data) => {
  const options = {
    method,
    headers: {}
  };

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const user = localStorage.getItem('auth');
  if (user.accessToken) {
    options.headers['X-Authorization'] = JSON.parse(user).accessToken;
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');