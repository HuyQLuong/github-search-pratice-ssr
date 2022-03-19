import React, { useEffect, useState } from 'react';
import ToggleButton from 'src/components/ToggleButton';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 10vh;
    padding: 0.5rem;
    margin: 0.5rem;
`

const PageTitle = styled.h1`
    width: 90%;
`
const ToggleButtonStyled = styled.div`
    padding: 1.5rem;
`

function Header ({title, toggleTheme, isDarkTheme} : {
    title: String;
    toggleTheme: Function;
    isDarkTheme: boolean
}) {
    const [isCheckedButton, setIsCheckedButton ] = useState(false);

    useEffect(() => {
        setIsCheckedButton(isDarkTheme);
    }, [isDarkTheme])

    return (
        <HeaderWrapper>
            <PageTitle>{title}</PageTitle>
            <ToggleButtonStyled>
                <ToggleButton toggleTheme={toggleTheme} isChecked={isCheckedButton}></ToggleButton>
            </ToggleButtonStyled>
        </HeaderWrapper>
    )
}

export default Header;