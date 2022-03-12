import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.25rem;
    margin: 0.25rem;
    width: 40%;
    max-height: 15%;
    @media (min-width: 768px) {
        width: 30%;
        padding: 1rem;
    }
    border-radius: 5px;
    text-decoration: none;
`

const RepoInfo = styled.div`
    font-size: 0.6rem;
    @media (min-width: 768px) {
      font-size: 0.7rem;
    }
`
const RepoInfoWrapper = styled.div`
    margin-top: 1rem;
`

const RepoName = styled.div`
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 0.5rem;
    overflow: hidden;
    width: 70%;
`

function RepositoryCard ({
  repo,
} : {
  repo: any
}) {

  return (
    <CardWrapper className='card'>
        <RepoName>
            {repo.name}
        </RepoName>
        <RepoInfoWrapper>
            <RepoInfo>
                {repo.forks} folk{repo.forks > 1 ? 's' : ''}
            </RepoInfo>
            <RepoInfo>
                {repo.watchers} star{repo.watchers > 1 ? 's' : ''}
            </RepoInfo>
        </RepoInfoWrapper>
    </CardWrapper>
  );
}


export default RepositoryCard;