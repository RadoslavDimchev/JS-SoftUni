import { del, get, post, put } from './api.js';


const endpoints = {
  all: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
  byId: '/data/theaters/',
  create: '/data/theaters',
  delete: '/data/theaters/',
  edit: '/data/theaters/',
  profile: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
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

export async function getMyItems(userId) {
  return get(endpoints.profile(userId));
}