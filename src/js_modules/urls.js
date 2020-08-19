const githubAPI = 'https://api.github.com/users';

export const getUserByLogin = (login) => {
  return `${githubAPI}/${login}`;
}