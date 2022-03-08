// import * as actionTypes from "src/store/actionTypes";

const initialState: UsersState = {
    users: [],
  }

function reducer (
    _state: UsersState = initialState,
    _action: UsersAction
  ): UsersState {
    switch (_action.type) {
      case 'GET_USER':
        const newArticle: IUsers = {
          id: Math.random(), // not really unique
          title: _action.users.title,
          body: _action.users.body,
        }
        return {
          ..._state,
          users: _state.users.concat(newArticle),
        }
      default:
        return _state
    }
  }
  
export default reducer;