import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import LikePage from 'src/route/LikedPage';
import UserPage from 'src/route/UserPage';
import SearchPage from 'src/route/SearchPage';
import { ROUTES } from 'src/route/routes';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
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

const THEME = {
  DARK_THEME : 'dark',
  LIGHT_THEME : 'light',
}


function PageWrapper({pageElement, title}: PageWrapperProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme && theme === THEME.DARK_THEME) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, [])

  const toggleTheme = () =>{
    localStorage.setItem('theme', !isDarkTheme ? THEME.DARK_THEME : THEME.LIGHT_THEME)
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header title={title} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} ></Header>
        {
          pageElement
        }
        <Footer title={title}></Footer>
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
