import React from 'react';
import styled from 'styled-components'
import { Label } from 'src/uiLabel';


const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const InputBarStyled = styled.input`
    width: 100%;
    line-height: 2rem;
`


function SearchBar () {
    return (
        <SearchBarWrapper>
            <InputBarStyled
                placeholder={Label.SEARCH_BAR_PLACEHOLDER}
            ></InputBarStyled>
        </SearchBarWrapper>
    )
}

export default SearchBar;