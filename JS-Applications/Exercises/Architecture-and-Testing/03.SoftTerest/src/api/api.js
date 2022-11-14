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

  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user) {
    options.headers['X-Authorization'] = user.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      if(response.status === 403) {
        sessionStorage.removeItem('user');
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

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');