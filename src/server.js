const express = require("express");
const App = express();
const mongoose = require("mongoose");
const { getDefaultSettings } = require("http2");
const https = require("https");
const { urlencoded } = require("express");
const path = require("path");
var cors = require('cors');

app.use(urlencoded({extended: true}));

app.use(express.static("public"));

app.use(cors({ origin: true, credentials: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.get('/ping', function (req, res) {
    return res.send('pong');
   });

   
app.listen(process.env.PORT || 8080);