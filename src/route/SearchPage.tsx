
import React, { useEffect, useState } from 'react';
import SearchBar from 'src/components/SearchBar';
import BlankScreen from 'src/components/BlankScreen';
import UserPagination from 'src/components/UserPagination';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { setSearchTermAction, setSearchPageAction, getUsersAction } from 'src/action/action';
import { useLocation } from 'react-router-dom';

const PageWrapper = styled.div`
  height: 100%
`
function SearchPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const usersListStore = useSelector((state: { users: {users: (IUser)[]}}) => state.users.users, shallowEqual);
  const totalUserStore = useSelector((state: { users: { total: number }}) => state.users.total, shallowEqual);
  const isLoadingUserInfoStore = useSelector((state:  { users: { isLoadingUserInfo: boolean }}) => state.users.isLoadingUserInfo, shallowEqual);
  const searchTermStore = useSelector((state: { users: { query: string }}) => state.users?.query, shallowEqual)
  const pageStore = useSelector((state: { users: { page: number }}) => state.users?.page, shallowEqual)


  const [ userList, setUserList ] = useState<(IUser)[]>([])
  const [ totalUsers, setTotalUsers ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false);
  
  useEffect(() => {
    const parsedQuery = queryString.parse(window.location.search)
    if (parsedQuery && parsedQuery.query === searchTermStore && Number(parsedQuery.page) === Number(pageStore)){
      setSearchTerm(String(parsedQuery.query))
      setCurrentPage(Number(parsedQuery.page))
      setUserList(usersListStore)
      return;
    }
    if (parsedQuery.query && searchTerm !== parsedQuery.query) {
      dispatch(setSearchTermAction({ searchTerm: String(parsedQuery.query)}))
      setSearchTerm(String(parsedQuery.query))
    }
    if (parsedQuery.page && currentPage !== Number(parsedQuery.page)) {
      dispatch(setSearchPageAction({page : Number(parsedQuery.page)}))
      setCurrentPage(Number(parsedQuery.page))
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
  }, [isLoadingUserInfoStore, usersListStore.length])


  useEffect(() => {
    if (!searchTerm || !currentPage) return;
    const url = `${searchTerm ? `?query=${searchTerm}`: ''}${searchTerm && currentPage ? `&&page=${currentPage}` : ''}`
    if (window.location.search !== url){
      navigate(url)
    }
  }, [currentPage, searchTerm])

  useEffect(() => {
    const parsedQuery = queryString.parse(window.location.search)
    if (!parsedQuery) return;
    if (Number(parsedQuery.page) > 83) return;
    if (parsedQuery && parsedQuery.query === searchTermStore && Number(parsedQuery.page) === Number(pageStore)) return;
    dispatch(getUsersAction({query: String(parsedQuery.query), page: Number(parsedQuery.page)}))
  }, [location])

  const renderScreen = () => {
    if (searchTerm && userList && userList.length) return (
      <UserPagination
        users={userList} 
        totalUsers={totalUsers}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
        initPage={currentPage}
        isLoading={isLoading}
    ></UserPagination>
    );
    if (searchTerm) return <BlankScreen page={MAP_ROUTE_TO_TITLE.searchEmpty}></BlankScreen>
    return <BlankScreen page={MAP_ROUTE_TO_TITLE.search}></BlankScreen>
  }

  return (
      <PageWrapper>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage}></SearchBar>
        {renderScreen()}
      </PageWrapper>
    );
}

export default SearchPage;
;
