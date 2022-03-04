import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from 'src/route/App';
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from 'styled-components';




const port = 3000;
const server = express();

server.use(express.static('build'));

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
  const body = renderToString(sheet.collectStyles(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  );
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  const html = ({ body, styles }) => `
    <!DOCTYPE html>
    <html>
      <head>
        ${styles}
      </head>
      <body style="margin:0">
        <div id="app">${body}</div>
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



server.listen(port, () => console.log('Example app listening on port 3000!'));