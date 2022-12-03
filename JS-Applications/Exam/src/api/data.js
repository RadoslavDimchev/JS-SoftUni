import { del, get, post, put } from './api.js';


const endpoints = {
  all: '/data/albums?sortBy=_createdOn%20desc',
  byId: '/data/albums/',
  create: '/data/albums',
  delete: '/data/albums/',
  edit: '/data/albums/'
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