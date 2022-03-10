import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import UserList from 'src/components/UserList'


const Paginate = styled(ReactPaginate).attrs({
    activeClassName: 'active', // default to "disabled"
  })`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0 5rem;
    li a {
      border-radius: 7px;
      padding: 0.1rem 0.5rem;
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
} : {
    users: (IUsers)[],
}) {
    const [currentItems, setCurrentItems] = useState<(IUsers)[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(users.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(users.length / itemsPerPage));
    }, [itemOffset, users]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
     <UserList currentItems={currentItems}></UserList>
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