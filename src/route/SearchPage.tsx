
import React, { useEffect, useState } from 'react';
import SearchBar from 'src/components/SearchBar';
import BlankScreen from 'src/components/BlankScreen';
import UserPage from 'src/components/UserPage';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components'

const PageWrapper = styled.div`
  height: 75vh;
`

function SearchPage() {

  const usersState = useSelector((state: any) => state.Users, shallowEqual);

  const [ userList, setUserList ] = useState([])

  useEffect(() => {
    setUserList(usersState.users)
  }, [usersState.total, usersState.users])

  return (
      <PageWrapper>
        <SearchBar></SearchBar>
        {
          userList && userList.length ?
          <UserPage users={userList}></UserPage>
          : <BlankScreen page={MAP_ROUTE_TO_TITLE.search}></BlankScreen>
        }
      </PageWrapper>
    );
}

export default SearchPage;
;
