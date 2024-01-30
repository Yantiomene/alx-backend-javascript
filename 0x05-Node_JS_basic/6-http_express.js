const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(PORT, () => {
});

module.exports = app;
