var express = require('express');
var app = express();

app.use(express.static(process.argv[3] || __dirname + '/public'));

app.listen(process.argv[2]);