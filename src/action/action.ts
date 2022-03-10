import * as actionTypes from "src/reducer/actionTypes"
import { getUsersService, getUserInfoService } from "src/services/github"


function addUsers({userList, totalUser, page, query} : {userList: [], totalUser: number, page: number, query: string}) {
    const action: UsersAction = {
      type: actionTypes.ADD_USERS,
      data: {
          userList,
          totalUser,
          page,
          query,
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

function likeUser({user} : { user : IUsers}) {
    const action: LikesAction = {
      type: actionTypes.ADD_LIKED_USER,
      data: {
            user,
        }
    }
    return action;
}

function unLikeUser({user} : { user : IUsers}) {
    const action: LikesAction = {
      type: actionTypes.UNLIKED_USER,
      data: {
            user,
        }
    }
    return action;
}

export const getUsersAction = ({query, page} :{query: string, page: number}) => async (dispatch: UserDispatchType) => {
    const response: any = await getUsersService({query, page});
    const userList: [] = response.items;
    const totalUser = response.total_count;
    if (userList && userList.length > 0) {
        dispatch(addUsers({userList, totalUser, page, query}));
    }
};

export const getUserInfoAction = ({username} :{username: string}) => async (dispatch: UserDispatchType) => {
    const response: any = await getUserInfoService({username});
    if (response){
        dispatch(addUserInfo({userInfo: response}));
    }
};

export const likeUserAction = ({user} :{user: IUsers}) => async (dispatch: LikeDispatchType) => {
    dispatch(likeUser({user}));
};

export const unLikeUserAction = ({user} :{user: IUsers}) => async (dispatch: LikeDispatchType) => {
    dispatch(unLikeUser({user}));
};

