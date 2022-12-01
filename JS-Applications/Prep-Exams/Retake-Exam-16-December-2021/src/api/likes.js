import { get, post } from './api.js';


const endpoints = {
  add: '/data/likes',
  likes: (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
  like: (theaterId, userId) => `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function addLike(theaterId) {
  return post(endpoints.add, { theaterId });
}

export async function getAllLikes(theaterId) {
  return get(endpoints.likes(theaterId));
}

export async function getLike(theaterId, userId) {
  return get(endpoints.like(theaterId, userId));
}