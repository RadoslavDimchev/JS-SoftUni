import { del, get, post, put } from './api.js';


const pageSize = 3;
const endpoints = {
  allItems: `/data/teams?pageSize=${pageSize}&offset=`,
  allMyItems: id => `/data/members?where=_ownerId%3D%22${id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams&pageSize=${pageSize}&offset=`,
  byId: '/data/teams/',
  create: '/data/teams',
  edit: '/data/teams/',
  members: '/data/members?where=status%3D%22member%22',
  memberships: id => `/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`,
  becomeMember: '/data/members',
  approveMember: '/data/members/',
  removeMember: '/data/members/',
  count: '/data/teams?count',
};

export async function getAllItems(page) {
  const [data, count] = await Promise.all([
    get(endpoints.allItems + (page - 1) * pageSize),
    get(endpoints.count)
  ]);
  return {
    data,
    pages: Math.ceil(count / pageSize)
  };
}

export async function getAllMyItems(id, page) {
  const [data, count] = await Promise.all([
    get(endpoints.allMyItems(id) + (page - 1) * pageSize),
    get(endpoints.count)
  ]);
  return {
    data,
    pages: Math.ceil(count / pageSize)
  };
}

export function getItemById(id) {
  return get(endpoints.byId + id);
}

export function getCount() {
  return get(endpoints.count);
}

export function createItem(data) {
  return post(endpoints.create, data);
}

export function editItem(id, data) {
  return put(endpoints.edit + id, data);
}

export function getMembers() {
  return get(endpoints.members);
}

export function getMemberships(id) {
  return get(endpoints.memberships(id));
}

export function becomeMember(data) {
  return post(endpoints.becomeMember, data);
}

export function approveMember(id, data) {
  return put(endpoints.approveMember + id, data);
}

export function removeMember(id) {
  return del(endpoints.removeMember + id);
}