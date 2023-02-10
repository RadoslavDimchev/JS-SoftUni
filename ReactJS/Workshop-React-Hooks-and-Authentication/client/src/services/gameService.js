import { request } from "./requester";

export const getAll = () => request('GET', `data/games`);