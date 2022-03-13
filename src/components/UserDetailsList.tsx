import React from 'react';
import UserCard from 'src/components/UserCard';
import RepoCard from 'src/components/RepoCard';
import styled from 'styled-components';

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
    user: any,
    type: string
}) {
  return (
    <PageWrapper>

          {
              type==='repo' && user.repoList && !!user.repoList.length && user.repoList.map((repo) => {
                  return (
                      <RepoCard repo={repo} key={repo.name}></RepoCard>
                  )
              })
          }
          {
            type==='follower' && user.followerList && !!user.followerList.length && user.followerList.map((follower) => {
              return (
                <UserCard key={follower.login} item={follower} likeDisable={true}></UserCard>
              )
            })
          }
          {
            type==='following' && user.followingList && !!user.followingList.length && user.followingList.map((follower) => {
              return (
                <UserCard key={follower.login} item={follower} likeDisable={true}></UserCard>
              )
            })
          }
    </PageWrapper>
  );
}


export default UserDetailsList;