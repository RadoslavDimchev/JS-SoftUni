import { del, get, post, put } from './api.js';


export async function getAllMemes() {
  return get('/data/memes?sortBy=_createdOn%20desc');
}

export async function getMemeById(id) {
  return get('/data/memes/' + id);
}

export async function createMeme(data) {
  return post('/data/memes', data);
}

export async function deleteMeme(id) {
  return del('/data/memes/' + id);
}

export async function editMeme(id, data) {
  return put('/data/memes/' + id, data);
}

export async function getAllMyMemes(userId) {
  return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}