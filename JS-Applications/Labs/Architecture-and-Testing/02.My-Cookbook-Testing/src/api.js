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

  const authToken = sessionStorage.getItem('authToken');

  if (authToken !== null) {
    options.headers['X-Authorization'] = authToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      const error = await response.json();
      throw Error(error.message);
    }

    if (response.status === 204) {
      return response;
    } else {
      return await response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export async function get(url) {
  return request('get', url);
}

export async function post(url, data) {
  return request('post', url, data);
}

export async function put(url, data) {
  return request('put', url, data);
}

export async function deleteReq(url) {
  return request('delete', url);
}