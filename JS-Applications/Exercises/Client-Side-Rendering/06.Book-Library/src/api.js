import { html, render } from '../node_modules/lit-html/lit-html.js';

export {
  html, 
  render
};


const host = 'http://localhost:3030/jsonstore/collections';

async function request(url, method = 'get', data) {
  const options = {
    method,
    headers: {}
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const res = await fetch(host + url, options);

  if (!res.ok) {
    const error = await res.json();
    alert(error.message);
    throw new Error(error.message);
  }

  return res.json();
}

export async function getAllBooks() {
  return request('/books');
}

export async function createBook(data) {
  return request('/books', 'post', data);
}

export async function updateBook(data, id) {
  return request('/books/' + id, 'put', data);
}

export async function deleteBook(id) {
  return request('/books/' + id, 'delete');
}