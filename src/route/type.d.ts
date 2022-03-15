interface IRoute {
  exact: boolean,
  path: string,
  title: string,
  element: string,
}

interface Repo {
  name: string,
  forks: number,
  watchers: number,
}
interface IUser {
  avatar_url: string,
  login: string
}

interface IUserDetail extends IUser {
  followerList: (IUser)[],
  followingList: (IUser)[],
  repoList: (Repo)[],
}