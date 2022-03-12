import * as actionTypes from "src/reducer/actionTypes"
import { getUsersService, getUserInfoService, getUserRepos, getUserFollower, getUserFollowing } from "src/services/github"


function addUsers({userList, totalUser, page, query} : {userList: {login: string}[], totalUser: number, page: number, query: string}) {
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

function setSearchTerm({searchTerm} : { searchTerm : string}) {
    const action: UsersAction = {
      type: actionTypes.SET_SEARCH_TERM,
      data: {
            query: searchTerm,
        }
    }
    return action;
}

function setSearchPage({page} : { page : number}) {
    const action: UsersAction = {
      type: actionTypes.SET_SEARCH_PAGE,
      data: {
            page: page,
        }
    }
    return action;
}

function setLoadingPage({status} : { status : boolean}) {
    const action: UsersAction = {
      type: actionTypes.SET_LOADING_PAGE,
      data: {
            isLoadingUserInfo: status,
        }
    }
    return action;
}

function addUserDetail({user} :{ user: IUsers}) {
    const action: UserDetailsAction = {
        type: actionTypes.ADD_USER_DETAILS,
        data: {
            user
        }
    }
    return action
}


export const getUsersAction = ({query, page} :{query: string, page: number}) => async (dispatch: UserDispatchType) => {
    dispatch(setLoadingPage({ status: true}))
    const response: any = await getUsersService({query, page});
    const userList: {login: string}[] = response.items;
    const totalUser = response.total_count;
    let userWithInfoList: ({login: string})[] = [];
    if (userList && userList.length > 0) {
        for (let i=0; i < userList.length; i++){
            const user = userList[i];
            const response: any = await getUserInfoService({username: user.login});
            if (response){
                userWithInfoList.push({
                    ...user,
                    ...response
                })

            }
        }
        dispatch(addUsers({userList: userWithInfoList, totalUser, query, page,}))
    } else {
        dispatch(setLoadingPage({ status: false}))

    }
};

export const setSearchTermAction = ({searchTerm} :{searchTerm: string}) => async (dispatch: UserDispatchType) => {
    dispatch(setSearchTerm({searchTerm}));
};

export const setSearchPageAction = ({page} :{page: number}) => async (dispatch: UserDispatchType) => {
    dispatch(setSearchPage({page}));
};

export const likeUserAction = ({user} :{user: IUsers}) => async (dispatch: LikeDispatchType) => {
    dispatch(likeUser({user}));
};

export const unLikeUserAction = ({user} :{user: IUsers}) => async (dispatch: LikeDispatchType) => {
    dispatch(unLikeUser({user}));
};

export const addUserDetailAction = ({user} :{user: IUsers}) => async (dispatch: UserDetailDispatchType) => {
    let repoList, followerList, followingList;
    if (!Object.keys(user).includes('repoList')){
        repoList = await getUserRepos({username : user.login });
    }
    if (!Object.keys(user).includes('followerList')){
        followerList = await getUserFollower({username : user.login });
    }
    if (!Object.keys(user).includes('followingList')){
        followingList = await getUserFollowing({username : user.login });
    }
    let detailUser = {
        ...user,
        repoList,
        followerList,
        followingList
    }
    dispatch(addUserDetail({user: detailUser}))
};

