// We first require our express package
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userdata = require('./user');
const middleware = require('./middleware.js');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');
var passport = require('passport');
const static = express.static(__dirname + "/public");

const exphbs = require("express-handlebars");

const Handlebars = require("handlebars");

const handlebarsInstance = exphbs.create({
  defaultLayout: "main",
  partialsDir: 'views/partials',
  layoutsDir: "views/layouts/",
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === "number")
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

// We create our express isntance:
const app = express();
app.use(session({
  secret: "lab10",
  key: "AuthCookie",//cookie name
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
  resave: false,
  saveUninitialized: false
}));
app.use(cookieParser('keyauth'));
app.use(bodyParser.json()); // for parsing application/json
app.use("/public", static);
app.use(flash())
app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

// Middlewares:

// 1. One which will count the number of requests made to your website

// Request is the request object, just like how we have access to the request in our routes
// Response is the response object, just like how we have access to the response in our routes
// next is a callback that will call the next middleware registered, or proceed to routes if none exist.
// If we do not call next(), we need to make sure we send a response of some sort or it will poll forever!

let currentNumberOfRequests = 0;

app.get('/', middleware.isLoggedIn, (req, res) => {
  console.log('get / to private');
  console.log(req.cookies.AuthCookie);
  res.render("private");
})

app.get('/private', middleware.isLoggedIn, (req, res) => {
  console.log('get to private');
  console.log(req.cookies.AuthCookie);
  res.render("private", { data: req.cookies.AuthCookie.data });
})


app.get('/login', middleware.hasLoggedIn, (req, res) => {
  console.log('get login');

  res.render("login");
})

app.get('/logout', middleware.isLoggedIn, (req, res) => {
  console.log('logout');
  res.clearCookie('AuthCookie');
  res.render("logout");
})

app.post('/login', middleware.auth, (req, res, next) => {
  //if (req.cookies.AuthCookie) {
  console.log('login success');
  res.send({ success: "login success" });

})

// app.get('/private', middleware.isLoggedIn, (req, res, next) => {
//   console.log('get to private');
//   //console.log(req.cookies.AuthCookie.data);
//   let back = req.cookies.AuthCookie.data;
//   console.log(back);
//   //console.log(cookieParser(req.cookies.AuthCookie.data));
//   res.render("private", { data: back });
//   next();
// })

app.get('/error', (req, res) => {
  console.log('get to error');
  res.render("error");
})


// We can now navigate to localhost:3000
app.listen(3000, function () {
  console.log(
    "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
  );
});
