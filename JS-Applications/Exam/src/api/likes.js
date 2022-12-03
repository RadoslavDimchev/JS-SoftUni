import { get, post } from './api.js';


const endpoints = {
  all: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
  number: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  create: '/data/likes'
};

export async function getAllLikes(albumId) {
  return get(endpoints.all(albumId));
}

export async function getLike(albumId, userId) {
  return get(endpoints.number(albumId, userId));
}

export async function addLike(albumId) {
  return post(endpoints.create, { albumId });
}