import { del, get, post, put } from './api.js';


const endpoints = {
  all: '/data/shoes?sortBy=_createdOn%20desc',
  byId: '/data/shoes/',
  create: '/data/shoes',
  delete: '/data/shoes/',
  edit: '/data/shoes/',
  query: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
};

export async function getAll() {
  return get(endpoints.all);
}

export async function getById(id) {
  return get(endpoints.byId + id);
}

export async function createItem(data) {
  return post(endpoints.create, data);
}

export async function deleteItem(id) {
  return del(endpoints.delete + id);
}

export async function editItem(id, data) {
  return put(endpoints.edit + id, data);
}

export async function getAllByQuery(query) {
  return get(endpoints.query(query));
}