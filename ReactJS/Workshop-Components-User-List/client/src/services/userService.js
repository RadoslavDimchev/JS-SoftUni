const BASE_URL = 'http://localhost:3005/api/users';

export const getAll = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json();

  return result.users;
};