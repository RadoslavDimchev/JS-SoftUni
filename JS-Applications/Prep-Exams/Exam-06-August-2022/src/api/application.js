import { get, post } from './api.js';


const endpoints = {
  all: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
  numberApp: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  create: '/data/applications'
};

export async function getAllApplciations(offerId) {
  return get(endpoints.all(offerId));
}

export async function getNumberOfApp(offerId, userId) {
  return get(endpoints.numberApp(offerId, userId));
}

export async function createApplication(offerId) {
  return post(endpoints.create, { offerId });
}