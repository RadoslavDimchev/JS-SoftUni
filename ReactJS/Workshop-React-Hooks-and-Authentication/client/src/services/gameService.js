import * as request from "./requester";

const URL = '/data/games';

export const getAll = () =>
  request.get(URL);

export const getById = (gameId) =>
  request.get(`${URL}/${gameId}`);

export const create = (gameData) =>
  request.post(URL, gameData);

export const edit = (gameId, gameData) =>
  request.put(`${URL}/${gameId}`, gameData);

export const remove = (gameId) =>
  request.del(`${URL}/${gameId}`);