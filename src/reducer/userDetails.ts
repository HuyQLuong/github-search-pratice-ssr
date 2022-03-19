import * as actionTypes from "src/reducer/actionTypes";

const initialState: UserDetailsState = {
    mapUserNameToUser: {},
  }

function reducer (
    _state: UserDetailsState = initialState,
    _action: UserDetailsAction
  ): UserDetailsState {
    switch (_action.type) {
      case actionTypes.ADD_USER_DETAILS:
        const username = String(_action.data['user']['login']).toLowerCase()
        return {
          ..._state,
          mapUserNameToUser: { 
            ..._state.mapUserNameToUser, 
            ...{ [username]: _action.data['user'] }}
        }
      default:
        return _state
    }
  }
  
export default reducer;