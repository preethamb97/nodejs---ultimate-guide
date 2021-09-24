const express = require('express');
const jwt = require('jsonwebtoken');
const authorize = require('./authorization-middleware');
const app = express();
const port = 4000;

//Request a token
app.get('/token', (req, res) => {
  const payload = {
    name: "Preetham",
    scopes: ["customer:create"]
  };

  const token = jwt.sign(payload, "my super secret key");

  res.send({ token });
});

app.get('/customer', authorize(), (req, res) => {
  res.send('Customer information');
});

const server = app.listen(port, () => {
  console.log(`Server is listening on ${server.address().port}`);
});