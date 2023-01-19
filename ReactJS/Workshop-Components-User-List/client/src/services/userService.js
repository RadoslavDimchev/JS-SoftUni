const BASE_URL = 'http://localhost:3005/api/users';

export const getAll = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json();

  return result.users;
};

export const create = async (user) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const result = await response.json();

  return result.user;
};

export const getById = async (userId) => {
  const response = await fetch(`${BASE_URL}/${userId}`);
  const result = await response.json();

  return result.user;
};

export const deleteById = async (userId) => {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: 'DELETE'
  });

  const result = await response.json();

  return result;
};

export const edit = async (user, userId) => {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const result = await response.json();

  return result.user;
};  