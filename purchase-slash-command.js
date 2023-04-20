const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9647;

// allow us to easily process POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/purchase', async (req, res) => {
  console.log(req.body);
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`);
});