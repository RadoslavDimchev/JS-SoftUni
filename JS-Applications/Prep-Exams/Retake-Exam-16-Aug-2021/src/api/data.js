import { del, get, post, put } from './api.js';


const endpoints = {
  all: '/data/games?sortBy=_createdOn%20desc',
  new: '/data/games?sortBy=_createdOn%20desc&distinct=category',
  byId: '/data/games/',
  create: '/data/games',
  delete: '/data/games/',
  edit: '/data/games/'
};

export async function getAll() {
  return get(endpoints.all);
}

export async function getNew() {
  return get(endpoints.new);
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