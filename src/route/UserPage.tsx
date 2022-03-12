
import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Repositories from 'src/components/Repositories';
import 'react-tabs/style/react-tabs.css';
import { addUserDetailAction } from 'src/action/action';
import { Dispatch } from "redux";
import { get as lGet } from 'lodash';


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
  }
`

function UserPage() {
  const dispatch: Dispatch<any> = useDispatch();
  const parsedQuery = queryString.parse(window.location.search)
  const mapUserNameToUserStore = useSelector((state: any) => state.userDetails.mapUserNameToUser, shallowEqual);
  const userStore = useSelector((state: any) => state.users.users, shallowEqual);
  const likedUserStore = useSelector((state: any) => state.likes.users, shallowEqual);

  const [ user, setUser ] = useState<IUsers | null>(null)


  useEffect(() => {
    if (!parsedQuery?.username) return;
    let matchedUser = mapUserNameToUserStore[String(parsedQuery.username)]
    if (!matchedUser){
      matchedUser = userStore.find(user => user.login === parsedQuery.username)
      if (!matchedUser) {
        matchedUser = likedUserStore.find(user => user.login === parsedQuery.username)
      } 
    }
    if (!Object.keys(matchedUser).some(key=> ['repoList','followerList', 'followingList'].includes(key))){
      dispatch(addUserDetailAction({user: matchedUser}))
    }
  }, [!!parsedQuery])

  useEffect(() => {
    let currentUser = mapUserNameToUserStore[String(parsedQuery.username)]
    setUser(currentUser)
  }, [mapUserNameToUserStore])

  const repoTabTitle = useMemo(() => lGet(user,'public_repos', 0) ? `Repositories (${lGet(user,'public_repos')})` : `Repository (0)`, [user])
  const followerTabTitle = useMemo(() => lGet(user,'followers', 0) ? `Followers (${lGet(user,'followers')})` : `Follower (0)`, [user])
  const followingTabTitle = useMemo(() => lGet(user,'following', 0) ? `Followings (${lGet(user,'following')})` : `Following (0)`, [user])
  
  return (
    <PageWrapper>
      {
        user && <>
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
                    <Repositories user={user}></Repositories>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
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
