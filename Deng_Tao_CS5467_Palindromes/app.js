
var express = require('express');
var app = express();

const html = express.static(__dirname + '/html');
const public = express.static(__dirname + '/public');
const routes = express.static(__dirname + '/routes');
app.use(html);
app.use("/public", public);
app.use("/routes", routes);

//监听端口为3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});