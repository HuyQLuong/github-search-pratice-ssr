
import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserDetailsList from 'src/components/UserDetailsList';
import { addUserDetailAction, getUserAction } from 'src/action/action';
import { get as lGet } from 'lodash';
import { useLocation } from 'react-router-dom';



const PageWrapper = styled.div`
  height: 100%;
`

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.05);
  padding-bottom: 1rem;
`

const Avatar = styled.div<{ url: string }>`
  background-image: url("${(props) => props.url}");
  background-size: contain;
  background-repeat: no-repeat;
  width: 5rem;
  height: 5rem;
  @media (min-width: 768px){
    width: 8rem;
    height: 8rem;
  }
  border-radius: 50%;
`

const Username = styled.div`
  padding: 0.5rem;
  font-weight: 600;
`

const UserBio = styled.div`
  font-size: 0.5rem;
  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`

const TabWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 70%;
`

const TabsStyled = styled(Tabs)`
  overflow-y: scroll;
  max-height: 100%;
  ul {
    justify-content: center;
    align-items: center;
    display: flex;
    border: 0;
  }

  ul li {
    font-size: 0.5rem;
    @media (min-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .react-tabs__tab--selected {
    background: transparent;
    border-bottom: 2px solid #1976D2;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #1976D2;
  
  }
  .react-tabs__tab:focus:after {
    background: transparent;
  }
  .react-tabs__tab-list {
    position: sticky;
    top: 0;
    padding-bottom: 1rem;
    z-index: 20;
  }
`

function UserPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const mapUserNameToUserStore = useSelector((state: { userDetails: { mapUserNameToUser: {}}}) => state.userDetails.mapUserNameToUser, shallowEqual);
  const userStore = useSelector((state: {users : { users: (IUser)[]}}) => state.users.users, shallowEqual);
  const likedUserStore = useSelector((state: { likes: {users: (IUser)[]}}) => state.likes.users, shallowEqual);

  const [ user, setUser ] = useState<IUser | null>(null)
  const [ username, setUsername ] = useState('')

  useEffect(() => {
    console.log("trigger location")
    const parsedQuery = queryString.parse(window.location.search);
    if (!parsedQuery?.username) return;
    let userFromDetailStore = mapUserNameToUserStore[String(parsedQuery.username).toLowerCase()]
    if (userFromDetailStore) {
      setStates({user: userFromDetailStore, username: String(parsedQuery.username).toLowerCase()})
      return;
    }
    let userFromLikedStore = likedUserStore.find(user => user.login === parsedQuery.username)
    if (userFromLikedStore) {
      setStates({user: userFromLikedStore, username: userFromLikedStore.login})
      return;
    }
    let userFromSearchStore = userStore.find(user => user.login === parsedQuery.username)
    if (userFromSearchStore) {
      setStates({user: userFromSearchStore, username: userFromSearchStore.login})
      return;
    }
    setStates({user: null, username: parsedQuery.username})
    dispatch(getUserAction({username: String(parsedQuery.username)}));
  }, [dispatch, location])

  useEffect(() => {
    let currentUser = mapUserNameToUserStore[String(username).toLowerCase()]
    if (currentUser) setUser(currentUser)
  }, [mapUserNameToUserStore])

  useEffect(() => {
    if (!user?.login) return;
    if (!Object.keys(user).some(key=> ['repoList','followerList', 'followingList'].includes(key))){
      dispatch(addUserDetailAction({user: user}))
    }
  }, [dispatch, user])

  const setStates = ({user, username}) => {
    setUser(user);
    setUsername(username);
  }

  const repoTabTitle = useMemo(() => lGet(user,'public_repos', 0) ? `Repositories (${lGet(user,'public_repos')})` : `Repository (0)`, [user])
  const followerTabTitle = useMemo(() => lGet(user,'followers', 0) ? `Followers (${lGet(user,'followers')})` : `Follower (0)`, [user])
  const followingTabTitle = useMemo(() => lGet(user,'following', 0) ? `Followings (${lGet(user,'following')})` : `Following (0)`, [user])
  
  return (
    <PageWrapper>
      {
        user && !!Object.keys(user).length && <>
          <AvatarWrapper>
            <Avatar url={user['avatar_url']}></Avatar>
            <Username>{user['login']}</Username>
            <UserBio>{user['bio']}</UserBio>
            </AvatarWrapper>
            <TabWrapper>
                <TabsStyled>
                  <TabList>
                    <Tab>{repoTabTitle}</Tab>
                    <Tab>{followerTabTitle}</Tab>
                    <Tab>{followingTabTitle}</Tab>
                  </TabList>

                  <TabPanel>
                    <UserDetailsList user={user} type={'repo'}></UserDetailsList>
                  </TabPanel>
                  <TabPanel>
                    <UserDetailsList user={user} type={'follower'}></UserDetailsList>
                  </TabPanel>
                  <TabPanel>
                    <UserDetailsList user={user} type={'following'}></UserDetailsList>
                  </TabPanel>
                </TabsStyled>
            </TabWrapper>
        </>
      }
    </PageWrapper>
  );
}

export default UserPage;
;
