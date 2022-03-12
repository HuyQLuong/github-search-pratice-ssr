import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserCard from 'src/components/UserCard';
import RepositoryCard from 'src/components/RepositoryCard';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  height: 80%;
  justify-content: center;
  margin-top: 1rem;
`

function Repositories ({    
    user
} : {
    user: any
}) {
  return (
    <PageWrapper>
        {
            user.repoList &&  user.repoList.length && user.repoList.map((repo) => {
                return (
                    <RepositoryCard repo={repo} key={repo.name}></RepositoryCard>
                )
            })
        }
    </PageWrapper>
  );
}


export default Repositories;