interface IUsers {
    id: number
    title: string
    body: string
  }
  
  type UsersState = {
    users: IUsers[]
  }
  
  type UsersAction = {
    type: string
    users: IUsers
  }
  
  type DispatchType = (args: UsersAction) => UsersAction