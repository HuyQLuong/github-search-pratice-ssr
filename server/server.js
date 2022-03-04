import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from 'src/route/App';
import { StaticRouter } from "react-router-dom/server";




const port = 3000;
const server = express();

server.use(express.static('build'));

server.get('/', (req, res) => {
  const body = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = ({ body }) => `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body style="margin:0">
        <div id="app">${body}</div>
      </body>
      <script src="/client.js" defer></script>
    </html>
  `;


  res.send(
    html({
      body
    })
  );
})



server.listen(port, () => console.log('Example app listening on port 3000!'));