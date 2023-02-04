const baseUrl = 'http://localhost:3030/data';

export const getAll = () => {
  return fetch(`${baseUrl}/games`)
    .then(res => res.json());
};