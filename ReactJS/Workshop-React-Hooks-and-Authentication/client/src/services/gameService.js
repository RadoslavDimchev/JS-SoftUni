import * as request from "./requester";

export const getAll = () => request.get('/data/games');