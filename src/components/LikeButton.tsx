import React, { useEffect, useMemo, useState } from 'react';
import { Heart as HeartIcon } from '@styled-icons/boxicons-solid/Heart';
import styled from 'styled-components';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Dispatch } from "redux";
import { likeUserAction, unLikeUserAction } from 'src/action/action';

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
    position: relative;
    right: 0;
`


function LikeButton ({
  item,
  likeDisable
} : {
  item: { login: string, avatar_url: string }
  likeDisable : boolean
}) {
   const dispatch: Dispatch<any> = useDispatch();
   const likedUsersState: IUsers[] = useSelector((state: any) => state.likes.users, shallowEqual);


   const [isLike, setIsLike] = useState(likeDisable)

    useEffect(() => {
        debugger;
        const isLikedUser = !!likedUsersState.find(likedUser => likedUser.login === item.login)
        if (isLikedUser){
            setIsLike(true);
        }
    },[item, likedUsersState])

   const handleClick = () => {
       if (likeDisable) return;
        setIsLike(!isLike)
        if (!isLike){
            dispatch(likeUserAction({user: item}))
        } else {
            dispatch(unLikeUserAction({user: item}))
        }
   }

  return (
      <HeartIconStyled
        active={isLike}
        onClick={handleClick}
        >
      </HeartIconStyled>
  );
}

export default LikeButton;