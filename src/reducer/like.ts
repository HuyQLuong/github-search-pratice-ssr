import * as actionTypes from "src/reducer/actionTypes";
import { cloneDeep as lCloneDeep} from 'lodash';

const initialState: LikesState = {
    users: [],
  }

function reducer (
    _state: LikesState = initialState,
    _action: LikesAction
  ): LikesState {
    switch (_action.type) {
      case actionTypes.ADD_LIKED_USER:
        return {
          ..._state,
          users: [..._state.users, _action.data['user']]
        };
      case actionTypes.UNLIKED_USER:
        const likeUser = _state.users.filter(user => user.login !== _action.data['user']['login'])
        return {
          ..._state,
          users: likeUser
        }
      default:
        return _state;
    }
  }
  
export default reducer;