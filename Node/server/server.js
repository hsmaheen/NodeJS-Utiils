const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    ans: 'Hello World'
  });
});


app.listen(7000);
module.exports.app = app;
