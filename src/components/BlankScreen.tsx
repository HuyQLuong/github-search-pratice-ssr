import React from 'react';
import styled from 'styled-components';
import { LABEL } from 'src/uiLabel';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { PeopleAlt as People } from '@styled-icons/material-sharp/PeopleAlt'
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes'

const BlankScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const GithubStyled = styled(Github)`
  opacity: 0.5;
  margin: 1rem;
`
const PeopleStyled = styled(People)`
    opacity: 0.5;
    margin: 1rem;
`

const BlankScreenMessage = styled.span`
    height: 5rem;
    max-width: 20rem;   
    text-align: center;
    opacity: 0.5;
    line-height: 1.5rem;
`

function BlankScreen ({
    page,
} : {
    page: string,
}) {
    return (
        <BlankScreenWrapper>
           {renderBlankPage(page)}
        </BlankScreenWrapper>
    )
}

const renderBlankPage = (page: string) => {
    switch (page) {
        case MAP_ROUTE_TO_TITLE.search:
            return (
                <>
                    <GithubStyled width={'10rem'} height={'10rem'}/>
                    <BlankScreenMessage>{LABEL.SEARCH_BLANK_SCREEN_MESSAGE}</BlankScreenMessage>
                </>
            )
        case MAP_ROUTE_TO_TITLE.liked:
            return (
                <>
                    <PeopleStyled width={'3rem'} height={'3rem'}/>
                    <BlankScreenMessage>{LABEL.LIKED_BLANK_SCREEN_MESSAGE}</BlankScreenMessage>
                </>
            );
    }
}

export default BlankScreen;