import { get, post } from './api.js';


const endpoints = {
  all: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
  donatation: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  create: '/data/donations',
};

export async function getAllDonations(postId) {
  return get(endpoints.all(postId));
}

export async function getDonation(postId, userId) {
  return get(endpoints.donatation(postId, userId));
}

export async function createDonation(postId) {
  return post(endpoints.create, { postId });
}