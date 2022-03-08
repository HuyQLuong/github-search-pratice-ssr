import React from 'react';
import styled from 'styled-components'
import { Label } from 'src/uiLabel';

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addUser } from 'src/action/action';

const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const InputBarStyled = styled.input`
    width: 100%;
    line-height: 2rem;
`


function SearchBar () {
    const dispatch: Dispatch<any> = useDispatch();

    const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addUser({
            id: 1,
            title: 'hello',
            body: 'nice'
        }))
    }

    return (
        <SearchBarWrapper>
            <InputBarStyled
                placeholder={Label.SEARCH_BAR_PLACEHOLDER}
                onChange={handleTyping}
            ></InputBarStyled>
        </SearchBarWrapper>
    )
}

export default SearchBar;