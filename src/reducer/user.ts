import * as actionTypes from "src/reducer/actionTypes";

const initialState: UsersState = {
    users: [],
    total: 0,
    page: 1,
    query: '',
    isLoadingUserInfo: false,
  }

function reducer (
    _state: UsersState = initialState,
    _action: UsersAction
  ): UsersState {
    switch (_action.type) {
      case actionTypes.ADD_USERS:
        return {
          ..._state,
          users: _action.data['userList'],
          total: _action.data['totalUser'],
          page: _action.data['page'],
          query: _action.data['query'],
          isLoadingUserInfo: false,
        }
        case actionTypes.SET_SEARCH_TERM:
          return {
            ..._state,
            query: _action.data['query']

          }
        case actionTypes.SET_SEARCH_PAGE:
          return {
            ..._state,
            page: _action.data['page']

          }
        case actionTypes.SET_LOADING_PAGE:
          return {
            ..._state,
            isLoadingUserInfo: _action.data['isLoadingUserInfo']
          }
      default:
        return _state
    }
  }
  
export default reducer;