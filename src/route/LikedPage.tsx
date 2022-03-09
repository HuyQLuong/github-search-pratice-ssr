
import React from 'react';
import BlankScreen from 'src/components/BlankScreen';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes'

function LikedPage() {
  return (
        <BlankScreen page={MAP_ROUTE_TO_TITLE.liked}></BlankScreen>
    );
}

export default LikedPage;
