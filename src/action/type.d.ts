interface IUsers {
    avatar_url: string,
    login: string
  }
  
  type UsersState = {
    users: IUsers[]
    total: number
    page: number
    query: string
  }
  
  type UsersAction = {
    type: string,
    data: {},
  }
  
  type LikesState = {
    users: IUsers[]
  }
  
  type LikesAction = {
    type: string,
    data: {},
  }

  type UserDispatchType = (args: UsersAction) => UsersAction
  type LikeDispatchType = (args: LikesAction) => LikesAction