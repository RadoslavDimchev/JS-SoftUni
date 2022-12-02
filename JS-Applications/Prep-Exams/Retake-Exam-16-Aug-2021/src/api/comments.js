import { get, post } from './api.js';


const endpoints = {
  all: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  create: '/data/comments'
};

export async function getAllComments(gameId) {
  return get(endpoints.all(gameId));
}

export async function createComment(gameId, comment) {
  return post(endpoints.create, { gameId, comment });
}
