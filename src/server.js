
// src/server.js
// const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App').default; // Replace with your main App component
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
