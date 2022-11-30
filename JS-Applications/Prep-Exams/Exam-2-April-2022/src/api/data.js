import { del, get, post, put } from './api.js';


export async function getAll() {
  return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPet(pet) {
  return post('/data/pets', pet);
}

export async function getById(id) {
  return get('/data/pets/' + id);
}

export async function deletePet(id) {
  return del('/data/pets/' + id);
}

export async function editPet(id, pet) {
  return put('/data/pets/' + id, pet);
}