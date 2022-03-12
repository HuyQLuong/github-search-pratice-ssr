interface IUsers {
    avatar_url: string,
    login: string
  }
  
  type UsersState = {
    users: IUsers[]
    total: number
    page: number
    query: string
    isLoadingUserInfo: boolean
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

  type UserDetailsState = {
    mapUserNameToUser: {}
  }

  type UserDetailsAction = {
    type: string,
    data: {},
  }

  type UserDispatchType = (args: UsersAction) => UsersAction
  type LikeDispatchType = (args: LikesAction) => LikesAction
  type UserDetailDispatchType = (args: UserDetailsAction) => UserDetailsAction