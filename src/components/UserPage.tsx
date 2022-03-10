import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import UserList from 'src/components/UserList'
import { getUsersAction } from 'src/action/action';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";


const Paginate = styled(ReactPaginate).attrs({
    activeClassName: 'active', // default to "disabled"
  })`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0 2rem;
    font-size: 0.5rem;
    @media (min-width: 1000px) {
      font-size: 1rem;
    }
    li a {
      border-radius: 7px;
      padding: 0.1rem 0.2rem;
      @media (min-width: 1000px) {
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

function UserPage ({
    users,
    totalUsers,
    searchTerm
} : {
    users: (IUsers)[],
    totalUsers: number,
    searchTerm: string,
}) {
    const dispatch: Dispatch<any> = useDispatch();
    const [currentItems, setCurrentItems] = useState<(IUsers)[]>([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setCurrentItems(users);
    }, [users]);
    
    useEffect(() => {
      setPageCount(Math.ceil(totalUsers/itemsPerPage + 1));
    }, [totalUsers]);

  const handlePageClick = (event) => {
    const page: number = Number(event.selected);
    //Working on caching previous page
    dispatch(getUsersAction({query: searchTerm, page: page + 1}))
  };

  return (
    <>
     <UserList currentItems={currentItems} likeDisable={false}></UserList>
      <Paginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
      />
    </>
  );
}


export default UserPage;