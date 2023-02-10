const BASE_URL = 'http://localhost:3030';

export const request = async (method, url, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const get = request.bind('GET');
export const post = request.bind('POST');
export const put = request.bind('PUT');
export const patch = request.bind('PATCH');
export const del = request.bind('DELETE');