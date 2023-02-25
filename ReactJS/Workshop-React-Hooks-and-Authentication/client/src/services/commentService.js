import * as request from "./requester";

const URL = '/data/comments';

export const create = (gameId, comment) =>
  request.post(URL, { gameId, text: comment });

export const getByGameId = (gameId) => {
  const relations = encodeURIComponent('user=_ownerId:users');
  const search = encodeURIComponent(`gameId="${gameId}"`);

  return request.get(`${URL}?where=${search}&load=${relations}`);
};