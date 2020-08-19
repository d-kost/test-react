const githubAPI = 'https://api.github.com/users';

export const terminals = 'terminals';
export const buyers = 'buyers';

export const getUserByLogin = (login) => {
  return `${githubAPI}/${login}`;
}