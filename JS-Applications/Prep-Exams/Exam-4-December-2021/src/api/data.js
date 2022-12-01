import { del, get, post, put } from './api.js';


const endpoints = {
  allAlbums: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
  byId: '/data/albums/',
  create: '/data/albums',
  delete: '/data/albums/',
  edit: '/data/albums/',
  query: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
};

export async function getAllAlbums() {
  return get(endpoints.allAlbums);
}

export async function getAlbum(id) {
  return get(endpoints.byId + id);
}

export async function createAlbum(album) {
  return post(endpoints.create, album);
}

export async function deleteAlbum(id) {
  return del(endpoints.delete + id);
}

export async function editAlbum(id, album) {
  return put(endpoints.edit + id, album);
}

export async function getAllAlbumsByQuery(query) {
  return get(endpoints.query(query));
}