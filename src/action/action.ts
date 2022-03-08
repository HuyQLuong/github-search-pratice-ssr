import * as actionTypes from "src/reducer/actionTypes"

export function addUser(users: IUsers) {
  const action: UsersAction = {
    type: actionTypes.GET_USER,
    users,
  }
  return (dispatch: DispatchType) => {
    dispatch(action);
  }
}

