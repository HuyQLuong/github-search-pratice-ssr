
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import BlankScreen from 'src/components/BlankScreen';
import { MAP_ROUTE_TO_TITLE } from 'src/route/routes';

function SearchPage() {
  return (
      <>
        <SearchBar></SearchBar>
        <BlankScreen page={MAP_ROUTE_TO_TITLE.search}></BlankScreen>
      </>
    );
}

export default SearchPage;
;
