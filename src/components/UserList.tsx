import React, { useState, useEffect } from 'react';
import UserCard from 'src/components/UserCard';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  height: 80%;
  justify-content: center;
  margin-top: 1rem;
`

function UserPage ({
  currentItems,
  likeDisable,
} : {
  currentItems: IUsers[],
  likeDisable: boolean,
}) {
  return (
    <PageWrapper>
      {
        currentItems.map((item: { login: string, avatar_url: string}) => {
            return (
              <UserCard key={item.login} item={item} likeDisable={likeDisable} ></UserCard>
            )
        })
      }
    </PageWrapper>
  );
}


export default UserPage;