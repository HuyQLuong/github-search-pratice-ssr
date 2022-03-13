
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import UserList from 'src/components/UserList';
import BlankScreen from 'src/components/BlankScreen';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes'

function LikedPage() {

  const likedUsersState: IUser[] = useSelector((state: { likes: {users: (IUser)[]}}) => state.likes.users, shallowEqual);

  return (
    <>
      { !!likedUsersState.length ?
        <UserList currentItems={likedUsersState} likeDisable={true}></UserList>
        :<BlankScreen page={MAP_ROUTE_TO_TITLE.liked}></BlankScreen>
      }
    </>
    );
}

export default LikedPage;
