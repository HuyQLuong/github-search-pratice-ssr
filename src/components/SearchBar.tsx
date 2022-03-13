import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'
import { LABEL } from 'src/uiLabel';
import { debounce as lDebounce } from 'lodash'

const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const InputBarStyled = styled.input`
    width: 100%;
    line-height: 2rem;
`


function SearchBar ({
    searchTerm,
    setSearchTerm,
    setCurrentPage,
}: {
    searchTerm: string,
    setSearchTerm: Function,
    setCurrentPage: Function
}) {
 

    const debouncedSearch = React.useRef(
        lDebounce(async (event) => {
            updateSearchTerm(event)
        }, 500)
      ).current;

    async function handleTyping (event: React.ChangeEvent<HTMLInputElement>)   {
        if(!event.target.value){
            updateSearchTerm(event)
        } else {
            debouncedSearch(event);
        }
    }

    const updateSearchTerm = (event) => {
        setCurrentPage(1)
        setSearchTerm(event.target.value)
    }

    return (
        <SearchBarWrapper>
            <InputBarStyled
                name="search"
                type="text"
                placeholder={LABEL.SEARCH_BAR_PLACEHOLDER}
                onChange={handleTyping}
                defaultValue={searchTerm}
            ></InputBarStyled>
        </SearchBarWrapper>
    )
}

export default SearchBar;