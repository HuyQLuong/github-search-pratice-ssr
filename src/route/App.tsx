import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikePage from 'src/route/LikePage';
import UserPage from 'src/route/UserPage';
import SearchPage from 'src/route/SearchPage';
import { ROUTES } from 'src/route/routes';
import Header from 'src/components/Header';
import GlobalStyles, { lightTheme, darkTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

interface NameToElementMapProps {
  [name: string]: JSX.Element
}

interface PageWrapperProps {
  pageElement: JSX.Element,
  title: string,
}

const nameToElementMap: NameToElementMapProps  = {
  'LikePage': <LikePage></LikePage>,
  'UserPage': <UserPage></UserPage>,
  'SearchPage': <SearchPage></SearchPage>
}

function PageWrapper({pageElement, title}: PageWrapperProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header title={title} toggleTheme={toggleTheme} ></Header>
        {
          pageElement
        }
    </ThemeProvider>
  )
}

function App() {

  return (
          <Routes>
              {
                ROUTES.map((route: any) => {
                  return(
                    <Route
                      key={String(route.path)}
                      path={route.path}
                      element={
                        <PageWrapper
                            pageElement={nameToElementMap[String(route.element)]}
                            title={route.title}
                        />
                      }
                    ></Route>
                  )
                })
              }
          </Routes>
  );
}

export default App;
