const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// 运行hbs模块
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

// 指定模板文件的后缀名为handlebars
app.set('view engine', 'handlebars'); 

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});