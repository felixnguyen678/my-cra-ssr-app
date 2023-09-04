// src/server.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App'; // Replace with your main App component
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server-Side Rendering</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
