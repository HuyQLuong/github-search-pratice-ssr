import React from 'react'
import styled from 'styled-components'
import { Loader as LoadingIcon } from '@styled-icons/boxicons-regular/Loader'



const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%
`
const LoadingIconStyled = styled(LoadingIcon)`
    width: 2rem;
    animation: spin 2s infinite linear;
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
`


function Loading () {
  return (
      <LoadingWrapper>
          <LoadingIconStyled></LoadingIconStyled>
        </LoadingWrapper>
  );
}

export default Loading