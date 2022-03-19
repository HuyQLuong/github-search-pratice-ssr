import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';import { ROUTES } from 'src/route/routes';
import {NavLink} from 'react-router-dom';
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { Heart as HeartIcon } from '@styled-icons/boxicons-solid/Heart';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';
import { useSelector, shallowEqual } from "react-redux";


const FooterWrapper = styled.div`
    box-shadow: 0px -4px 4px 0px #0000000D;
    text-align: center;
    height: 5rem;
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 5;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
`


// Color code for active menu: #1976D2
const MenuIconWrapper = styled(NavLink)`
    width: 50%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.8;
    text-decoration: none;
`

const SearchIconStyled = styled(SearchIcon)`
    width: 1.5rem;
    height: 1.5rem;
    ${({ active }: {active: Boolean}) => active && `
        fill: #1976D2;
    `}
`
const HeartIconStyled = styled(HeartIcon)`
    width: 1.5rem;
    height: 1.5rem;
    ${({ active }: {active: Boolean}) => active && `
        fill: #1976D2;
    `}
`

const MenuLabel = styled.span`
    padding-top: 0.5rem;
    font-weight: 500;
    font-size: 0.8rem;
    ${({ active }: {active: Boolean}) => active && `
        color: #1976D2;
    `}
`

function Footer ({title} :{ title: String }) {
    const searchTermStore = useSelector((state: {users: { query: string}}) => state.users?.query, shallowEqual)
    const pageStore = useSelector((state: {users: { page: number }}) => state.users?.page, shallowEqual)
    
    const generateSearchPageUrl = useCallback(() => {
        if (title !== MAP_ROUTE_TO_TITLE.liked) return '/'
        if (!searchTermStore || !pageStore) return '/'
        return `/?query=${searchTermStore}&&page=${pageStore}`
    }, [title])

    const activeRoute = useMemo(() => ROUTES.find((route: IRoute) => route.title === title),[title]);
    return (
        <FooterWrapper>
           <MenuIconWrapper end to={generateSearchPageUrl()}>
                <SearchIconStyled active={activeRoute?.title === MAP_ROUTE_TO_TITLE.search} ></SearchIconStyled>
                <MenuLabel active={activeRoute?.title === MAP_ROUTE_TO_TITLE.search}>Search</MenuLabel>
           </MenuIconWrapper>
           <MenuIconWrapper end to="/liked">
                <HeartIconStyled active={activeRoute?.title === MAP_ROUTE_TO_TITLE.liked}></HeartIconStyled>
                <MenuLabel active={activeRoute?.title === MAP_ROUTE_TO_TITLE.liked} >Favorites</MenuLabel>
           </MenuIconWrapper>
        </FooterWrapper>
    )
}

export default Footer;