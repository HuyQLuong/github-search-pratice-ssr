import React from 'react';
import ToggleButton from 'src/components/ToggleButton';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 10vh;
`

const PageTitle = styled.h1`
    width: 90%;
`
const ToggleButtonStyled = styled.div`
    padding: 1.5rem;
`

function Header ({title, toggleTheme} : {
    title: String;
    toggleTheme: Function;
}) {
    return (
        <HeaderWrapper>
            <PageTitle>{title}</PageTitle>
            <ToggleButtonStyled>
                <ToggleButton toggleTheme={toggleTheme}></ToggleButton>
            </ToggleButtonStyled>
        </HeaderWrapper>
    )
}

export default Header;