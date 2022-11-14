import * as api from './api.js';


const endpoints = {
  'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
  'ideaById': '/data/ideas/',
  'create': '/data/ideas'
};

export async function getAllIdeas() {
  return api.get(endpoints.ideas);
}

export async function getById(id) {
  return api.get(endpoints.ideaById + id);
}

export async function createIdea(ideaData) {
  return api.post(endpoints.create, ideaData);
}

export async function deleteById(id) {
  return api.del(endpoints.ideaById + id);
}