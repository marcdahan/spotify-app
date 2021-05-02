/* jshint -W058, -W024, -W098 */
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('src'));

app.get('(/default.html|\/)', function(req, res) {
    res.sendfile('src/default.html');
});






















app.listen(5000, function() {
  console.log('listening on port 5000!');
});
