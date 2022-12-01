import { del, get, post, put } from './api.js';


const endpoints = {
  getAll: '/data/cars?sortBy=_createdOn%20desc',
  getById: '/data/cars/',
  create: '/data/cars',
  edit: '/data/cars/',
  delete: '/data/cars/',
  getAllMy: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  byQuery: '/data/cars?where=year%3D'
};

export async function getAllListings() {
  return get(endpoints.getAll);
}

export async function getListing(id) {
  return get(endpoints.getById + id);
}

export async function createListing(listing) {
  return post(endpoints.create, listing);
}

export async function editListing(id, listing) {
  return put(endpoints.edit + id, listing);
}

export async function deleteListing(id) {
  return del(endpoints.delete + id);
}

export async function getAllMyListings(userId) {
  return get(endpoints.getAllMy(userId));
}

export async function getAllListingsByQuery(query) {
  return get(endpoints.byQuery + query);
}