
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

  const usersState = useSelector((state: any) => state.users, shallowEqual);

  const [ userList, setUserList ] = useState([])
  const [ totalUsers, setTotalUser ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState('');
  

  useEffect(() => {
    setUserList(usersState.users)
    setTotalUser(usersState.total)
  }, [usersState.total, usersState.users])

  useEffect(() => {
    setSearchTerm(usersState.query)
  }, [usersState.query])

  return (
      <PageWrapper>
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
        {
          userList && userList.length ?
          <UserPage users={userList} totalUsers={totalUsers} searchTerm={searchTerm}></UserPage>
          : <BlankScreen page={MAP_ROUTE_TO_TITLE.search}></BlankScreen>
        }
      </PageWrapper>
    );
}

export default SearchPage;
;
