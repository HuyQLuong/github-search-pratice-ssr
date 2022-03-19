import React, { useCallback } from 'react';
import styled from 'styled-components';

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

const DetailInfo = styled.div`
    font-size: 0.6rem;
    @media (min-width: 768px) {
      font-size: 0.7rem;
    }
`
const UserDetailWrapper = styled.div`
    margin-top: 1rem;
`

const DetailName = styled.div`
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 0.5rem;
    overflow: hidden;
    width: 70%;
`


function UserDetailsCard ({
  repo,
} : {
  repo: Repo,
}) {
  const renderRepoCard = useCallback(() => {
    return (
      <>
        <DetailName>
              {repo.name}
          </DetailName>
          <UserDetailWrapper>
              <DetailInfo>
                  {repo.forks} folk{repo.forks > 1 ? 's' : ''}
              </DetailInfo>
              <DetailInfo>
                  {repo.watchers} star{repo.watchers > 1 ? 's' : ''}
              </DetailInfo>
          </UserDetailWrapper>
      </>
    )
  }, [repo])


  return (
    <CardWrapper className='card'>
        {renderRepoCard()}
    </CardWrapper>
  );
}


export default UserDetailsCard;