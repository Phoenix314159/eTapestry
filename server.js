const express = require('express'),
  app = express(),
  port = process.env.PORT || '3020',
  soap = require('soap'),
  config = require('./config'),
  url = config.url,
  args = config.args;

require('./middleware/middleware')(app);
require('./routes/api')(app);
require('./routes/soap')(soap, url, args);

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(port, () => {
  // soap.listen(app, '/wsdl');
  console.log(`listening on port ${port}`);
})
