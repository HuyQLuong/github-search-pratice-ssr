import * as actionTypes from "src/reducer/actionTypes";
import { cloneDeep as lCloneDeep} from 'lodash';

const initialState: UserDetailsState = {
    mapUserNameToUser: {},
  }

function reducer (
    _state: UserDetailsState = initialState,
    _action: UserDetailsAction
  ): UserDetailsState {
    switch (_action.type) {
      case actionTypes.ADD_USER_DETAILS:
        return {
          ..._state,
          mapUserNameToUser: { 
            ..._state.mapUserNameToUser, 
            ...{ [_action.data['user']['login']]: _action.data['user'] }}
        }
      default:
        return _state
    }
  }
  
export default reducer;