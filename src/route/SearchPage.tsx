
import React, { useEffect, useState } from 'react';
import SearchBar from 'src/components/SearchBar';
import BlankScreen from 'src/components/BlankScreen';
import UserPage from 'src/components/UserPage';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { setSearchTermAction, setSearchPageAction } from 'src/action/action';
import { Dispatch } from "redux";

const PageWrapper = styled.div`
  height: 75vh;
`

function SearchPage() {

  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const usersListStore = useSelector((state: any) => state.users.users, shallowEqual);
  const totalUserStore = useSelector((state: any) => state.users.total, shallowEqual);
  const isLoadingUserInfoStore = useSelector((state: any) => state.users.isLoadingUserInfo, shallowEqual);
  const queryStore = useSelector((state: any) => state.users.query, shallowEqual);
  const pageStore = useSelector((state: any) => state.users.page, shallowEqual);

  const parsedQuery = queryString.parse(window.location.search)

  const [ userList, setUserList ] = useState([])
  const [ totalUsers, setTotalUsers ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false);
  
  useEffect(() => {
    if (parsedQuery.query && searchTerm !== parsedQuery.query) {
      dispatch(setSearchTermAction({ searchTerm: String(parsedQuery.query)}))
    }
    if (parsedQuery.page && currentPage !== Number(parsedQuery.page)) {
      dispatch(setSearchPageAction({page : Number(parsedQuery.page)}))
    }
  }, []);

  useEffect(() => {
    if (!isLoadingUserInfoStore){
      setUserList(usersListStore)
      setTotalUsers(totalUserStore)
    }
    if (isLoadingUserInfoStore !== isLoading){
      setIsLoading(isLoadingUserInfoStore)
    }
  }, [isLoadingUserInfoStore, usersListStore.length, pageStore])


  useEffect(() => {
    if (pageStore !== currentPage){
      setCurrentPage(pageStore)
    }
    if (queryStore !== searchTerm){
      setSearchTerm(queryStore)
    }
  }, [queryStore, pageStore])

  useEffect(() => {
    if(parsedQuery?.query !== searchTerm || Number(parsedQuery?.page) !== currentPage){
      const url = `${searchTerm ? `?query=${searchTerm}`: ''}${searchTerm && currentPage ? `&&page=${currentPage}` : ''}`
      navigate(url)
    }
  }, [currentPage, searchTerm])


  return (
      <PageWrapper>
        <SearchBar setSearchTerm={setSearchTerm} ></SearchBar>
        {
            userList && userList.length ?
            <UserPage
              users={userList} 
              totalUsers={totalUsers}
              searchTerm={searchTerm}
              setCurrentPage={setCurrentPage}
              initPage={currentPage}
              isLoading={isLoading}
            ></UserPage>
            :  <BlankScreen page={MAP_ROUTE_TO_TITLE.search}></BlankScreen>
        }
      </PageWrapper>
    );
}

export default SearchPage;
;
