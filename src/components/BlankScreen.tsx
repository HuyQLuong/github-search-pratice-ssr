import React from 'react';
import styled from 'styled-components';
import ghIcon from 'src/asset/gh.svg';
import { Label } from 'src/uiLabel';

const BlankScreenWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BlankScreenIcon = styled.img`
  width: 10rem;
  height: 10rem;
  opacity: 0.5;
  margin: 1rem;
`
const BlankScreenMessage = styled.span`
    height: 5rem;
    max-width: 30vw;
    text-align: center;
    opacity: 0.5;
    line-height: 1.5rem;
`

function BlankScreen () {
    return (
        <BlankScreenWrapper>
            <BlankScreenIcon src={ghIcon} alt="React Logo" />
            <BlankScreenMessage>{Label.BLANK_SCREEN_MESSAGE}</BlankScreenMessage>
        </BlankScreenWrapper>
    )
}

export default BlankScreen;