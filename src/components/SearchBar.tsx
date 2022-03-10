import React from 'react';
import styled from 'styled-components'
import { LABEL } from 'src/uiLabel';

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { getUsersAction } from 'src/action/action';
import { debounce as lDebounce } from 'lodash'

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

    const debouncedSearch = React.useRef(
        lDebounce(async (event) => {
            if (event.target.value){
                dispatch(getUsersAction(
                    { query: event.target.value}
                ))
            } else {
                // TODO: clear user
            }
        }, 500)
      ).current;

    async function handleTyping (event: React.ChangeEvent<HTMLInputElement>)   {
        debouncedSearch(event);
    }

    return (
        <SearchBarWrapper>
            <InputBarStyled
                placeholder={LABEL.SEARCH_BAR_PLACEHOLDER}
                onChange={handleTyping}
            ></InputBarStyled>
        </SearchBarWrapper>
    )
}

export default SearchBar;