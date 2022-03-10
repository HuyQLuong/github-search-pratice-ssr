import * as actionTypes from "src/reducer/actionTypes";
import { cloneDeep as lCloneDeep} from 'lodash';

const initialState: UsersState = {
    users: [],
    total: 0,
  }

function reducer (
    _state: UsersState = initialState,
    _action: UsersAction
  ): UsersState {
    switch (_action.type) {
      case actionTypes.ADD_USER_INFO:
        const newState: UsersState = lCloneDeep(_state);
        let userIndex = newState.users.findIndex(user => user.login === _action.data['userInfo']['login']);
        if (userIndex > -1) {
          newState.users[userIndex] = {
            ...newState.users[userIndex],
            ..._action.data['userInfo']
          }
        }
        return {
          ..._state,
          users: newState.users,
        }
      case actionTypes.ADD_USERS:
        return {
          ..._state,
          users: _action.data['userList'],
          total: _action.data['totalUser'],
        }
      default:
        return _state
    }
  }
  
export default reducer;