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

interface UserDetail {
  repoList: (Repo)[],
  followerList: ({})[],
  followingList: ({})[]
}