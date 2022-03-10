import * as actionTypes from "src/reducer/actionTypes"
import { getUsersService, getUserInfoService } from "src/services/github"


function addUsers({userList, totalUser} : {userList: [], totalUser: number}) {
    const action: UsersAction = {
      type: actionTypes.ADD_USERS,
      data: {
          userList,
          totalUser,
        }
    }
    return action;
}

function addUserInfo({userInfo} : { userInfo : {}}) {
    const action: UsersAction = {
      type: actionTypes.ADD_USER_INFO,
      data: {
            userInfo,
        }
    }
    return action;
}

export const getUsersAction = ({query} :{query: string}) => async (dispatch: UserDispatchType) => {
    const response: any = await getUsersService({query});
    const userList: [] = response.items;
    const totalUser = response.total_count;
    if (userList && userList.length > 0) {
        dispatch(addUsers({userList, totalUser}));
    }
};

export const getUserInfoAction = ({username} :{username: string}) => async (dispatch: UserDispatchType) => {
    const response: any = await getUserInfoService({username});
    if (response){
        dispatch(addUserInfo({userInfo: response}));
    }
};

// export const likeUserAction = ({user} :{user: IUsers}) => async (dispatch: LikeDispatchType) => {

//         dispatch(addUserInfo({userInfo: response}));
//     }
// };

