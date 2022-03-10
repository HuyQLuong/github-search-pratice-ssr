import React, { useState } from 'react';
import { Heart as HeartIcon } from '@styled-icons/boxicons-solid/Heart';
import styled from 'styled-components';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";


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


function LikeButton ({
  item,
} : {
  item: { login: string, avatar_url: string }
}) {

   const [isLike, setIsLike] = useState(false)
   const handleClick = () => {
        setIsLike(!isLike)
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