import React, { useEffect, useState } from 'react';
import { Heart as HeartIcon } from '@styled-icons/boxicons-solid/Heart';
import styled from 'styled-components';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from 'src/action/action';
import LikeButton from 'src/components/LikeButton';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;
    margin: 0.25rem;
    width: 30%;
    border-radius: 5px;
`

const Avatar = styled.div<{ url: string }>`
    background-image: url("${(props) => props.url}");
    background-size: contain;
    background-repeat: no-repeat;
    width: 25%;
    height: 100%;
    margin-right: 0.5rem;
`

const UserInfo = styled.div`
    height: 100%;
    width: 60%;
    font-size: 0.7rem;
`

const Username = styled.div`
    font-weight: 700;
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
`


const HeartIconStyled = styled(HeartIcon)`
    width: 0.8rem;
    height: 0.8rem;
    stroke: #F44336;
    stroke-width: 2;
    fill: none;
    cursor: pointer;
    ${({ active }: {active: Boolean}) => active && `
        fill: #F44336;
        stroke-width: 0;
    `}
`


function UserCard ({
  item,
} : {
  item: { login: string, avatar_url: string }
}) {
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        const isEnoughInfo = Object.keys(item).includes('followers') && Object.keys(item).includes('following');
        if (!isEnoughInfo){
            dispatch(getUserInfoAction({username: item.login}))
        }
    }, [Object.keys(item).length])


  return (
    <CardWrapper className='user-card'>
      <Avatar url={item.avatar_url}></Avatar>
      <UserInfo> 
            <Username>{item.login}</Username>
            {
                Object.keys(item).includes('followers') && <div>{item['followers']} followers</div>
                
            } {
                Object.keys(item).includes('following') && <div>{item['following']} followings</div>
            }
      </UserInfo>  
      <LikeButton item={item}></LikeButton>
    </CardWrapper>
  );
}


export default UserCard;