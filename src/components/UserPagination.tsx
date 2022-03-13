import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import UserList from 'src/components/UserList';
import Loading from 'src/components/Loading';
import BlankScreen from 'src/components/BlankScreen';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';



const Paginate = styled(ReactPaginate).attrs({
    activeClassName: 'active', // default to "disabled"
  })`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0 2rem;
    font-size: 0.5rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    li a {
      border-radius: 7px;
      padding: 0.1rem 0.2rem;
      @media (min-width: 768px) {
        padding: 0.1rem 0.5rem;
      }
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      margin: 0.2rem;
    }
    li.previous a {
      border-radius: 50%;
    }
    li.next a {
      border-radius: 50%;
    }
    li.break a {
      border-color: transparent;
    }
    li.active a {
      background-color: #0366d6;
      color: white;
      min-width: 32px;
    }
    li.disabled a {
      color: grey;
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;

const itemsPerPage = 12;
const GITHUB_API_MAXIMUM_PAGE = 82;

function UserPagination ({
    users,
    totalUsers,
    searchTerm,
    setCurrentPage,
    initPage,
    isLoading,
} : {
    users: (IUser)[],
    totalUsers: number,
    searchTerm: string,
    setCurrentPage: Function,
    initPage: number,
    isLoading: Boolean,
}) {
    const [currentItems, setCurrentItems] = useState<(IUser)[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [ isExceedLimit, setIsExceedLimit ] = useState(false)

    useEffect(() => {
        setCurrentItems(users);
    }, [users]);
    
    useEffect(() => {
      const page = Math.ceil(totalUsers/itemsPerPage)
      setPageCount(page);
    }, [totalUsers]);

  const handlePageClick = (event) => {
    const page: number = Number(event.selected);
    if (page > GITHUB_API_MAXIMUM_PAGE) {
      setIsExceedLimit(true)
    } else {
      if (isExceedLimit) setIsExceedLimit(false)
      setCurrentPage(page +1)
    }
  };

  return (
    <>
      {
        isExceedLimit && <BlankScreen page={MAP_ROUTE_TO_TITLE.pageExceed}></BlankScreen>
      }
      {
        !isExceedLimit && (
          isLoading ? <Loading></Loading> : (
          <UserList currentItems={currentItems} likeDisable={false}></UserList>
        ))
      }
      <Paginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        forcePage={initPage-1}
      />
    </>
  );
}


export default UserPagination;