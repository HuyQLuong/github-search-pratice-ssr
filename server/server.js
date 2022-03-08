import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from 'src/route/App';
import { StaticRouter } from "react-router-dom/server";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from 'src/reducer/index';


const port = 3000;
const server = express();

server.use(express.static('build'));

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
  const store = createStore(reducer)

  const body = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.url}>
          <App/>
      </StaticRouter>
    </Provider>
  ));
  const preloadedState = store.getState()
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
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
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



server.listen(port, () => console.log('Example app listening on port 3000!'));