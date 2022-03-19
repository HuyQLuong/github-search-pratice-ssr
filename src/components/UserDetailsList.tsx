import React, {useMemo} from 'react';
import UserCard from 'src/components/UserCard';
import RepoCard from 'src/components/RepoCard';
import styled from 'styled-components';
import { get as lGet } from 'lodash';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  height: 80%;
  justify-content: center;
  margin-top: 1rem;
`

function UserDetailsList ({    
    user,
    type,
} : {
    user: IUser,
    type: string
}) {
  const repoList = useMemo(() => lGet(user, 'repoList', null),[user])
  const followerList = useMemo(() => lGet(user, 'followingList', null),[user])
  const followingList = useMemo(() => lGet(user, 'followingList', null),[user])


  return (
    <PageWrapper>

          {
              type==='repo' && repoList && !!repoList.length && repoList.map((repo) => {
                  return (
                      <RepoCard repo={repo} key={repo.name}></RepoCard>
                  )
              })
          }
          {
            type==='follower' && followingList && !!followerList.length && followerList.map((follower: IUser) => {
              return (
                <UserCard key={follower.login} item={follower} likeDisable={true}></UserCard>
              )
            })
          }
          {
            type==='following' && followingList && !!followingList.length && followingList.map((follower) => {
              return (
                <UserCard key={follower.login} item={follower} likeDisable={true}></UserCard>
              )
            })
          }
    </PageWrapper>
  );
}


export default UserDetailsList;