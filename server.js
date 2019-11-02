//server.js
const express = require('express'),
      favicon = require('express-favicon'),
      path = require('path'),
      port = process.env.PORT || 8080,
      app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/reviewresponse', (res, req) => {
    console.log('response!!!');
    res('Response received!');
});

app.listen(port);