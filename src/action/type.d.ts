interface IUsers {
    avatar_url: string,
    login: string
    body: string
  }
  
  type UsersState = {
    users: IUsers[]
    total: number
  }
  
  type UsersAction = {
    type: string,
    data: {},
  }
  
  type DispatchType = (args: UsersAction) => UsersAction

  type LikesState = {
    users: IUsers[]
  }
  
  type LikesAction = {
    type: string,
    data: {},
  }
  
  type DispatchType = (args: LikesAction) => LikesAction