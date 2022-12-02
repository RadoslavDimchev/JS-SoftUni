import { del, get, post, put } from './api.js';


const endpoints = {
  all: '/data/posts?sortBy=_createdOn%20desc',
  allMy: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  byId: '/data/posts/',
  create: '/data/posts',
  edit: '/data/posts/',
  delete: '/data/posts/'
};

export async function getAll() {
  return get(endpoints.all);
}

export async function getAllMy(userId) {
  return get(endpoints.allMy(userId));
}

export async function getById(id) {
  return get(endpoints.byId + id);
}

export async function createPost(data) {
  return post(endpoints.create, data);
}

export async function editPost(id, data) {
  return put(endpoints.edit + id, data);
}

export async function deletePost(id) {
  return del(endpoints.delete + id);
}