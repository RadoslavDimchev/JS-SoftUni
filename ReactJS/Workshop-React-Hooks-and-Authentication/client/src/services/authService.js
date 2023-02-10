import * as request from "./requester";

export const login = (email, password) =>
  request.post('/users/login', { email, password });