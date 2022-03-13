import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from 'src/route/App';
import { StaticRouter } from "react-router-dom/server";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from 'src/reducer/index';
import { persistReducer } from 'redux-persist';
import "regenerator-runtime"
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const port = 3000;
const server = express();

server.use(express.static('build'));

server.use((req, res, next) => {

  const createNoopStorage = () => {
    return {
      getItem(_key) {
        return Promise.resolve(null);
      },
      setItem(_key, value) {
        return Promise.resolve(value);
      },
      removeItem(_key) {
        return Promise.resolve();
      },
    };
  };
  const persistConfig = {
      key: 'root',
      storage: typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage(),
  };
  const rootReducer = persistReducer(persistConfig, reducer);

  req.reduxStore = createStore(rootReducer);
  next();
});

server.get('/*', async(req, res) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

  const body = renderToString(sheet.collectStyles(
    <Provider store={req.reduxStore}>

      <StaticRouter location={req.url}>
          <App/>
      </StaticRouter>
    </Provider>
  ));
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  const html = ({ body, styles }) => `
    <!DOCTYPE html>
    <html>
      <head>
        ${styles}
      </head>
      <body style="margin:0">
        <div id="root">${body}</div>
      </body>
      <script src="/client.js" defer></script>
    </html>
  `;
  res.send(
    html({
      body,
      styles
    })
  );
})



server.listen(process.env.PORT || port, () => console.log('Example app listening on port 3000!'));