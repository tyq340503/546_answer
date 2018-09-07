// We first require our express package
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userdata = require('./user');
const middleware = require('./middleware.js');
var session = require('express-session');
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
  console.log('private');
  console.log(req.cookies.AuthCookie);
  res.render("private");
})


app.get('/login', middleware.hasLoggedIn, (req, res) => {
  console.log('get login');
  //req.cookies.AuthCookie;
  // if (res.cookie.AuthCookie) {
  //   console.log('get to private');
  //   res.redirect('private');
  // } else {
  //   res.cookie('AuthCookie', { name: req.body.name, password: req.body.password }, { secure: true });
  // }
  res.render("login");
})

app.get('/logout', middleware.isLoggedIn, (req, res) => {
  console.log('logout');
  res.clearCookie('AuthCookie');
  res.render("logout");
})

app.post('/login', middleware.auth, (req, res, next) => {
  //console.log(req.body);
  // userdata.forEach((i) => {
  //   if (i.username == req.body.name && i.password == req.body.password) {
  //     console.log('right password');
  //     res.cookie('AuthCookie', { name: req.body.name, data: i }, { secure: true });
  //     //return res.redirect('/private');
  //     console.log(res.cookie);
  //     return next();
  //   }
  // })
  // res.render('login', { error: "username or password is wrong" });
  // res.send().status('');
  console.log('login success');
  //res.redirect('/private');
  //res.cookie('AuthCookie', { name: req.body.name }, { singed: true }); 
  return res.send({ success: "login success" });
  //next();
})

app.get('/private', middleware.isLoggedIn, (req, res, next) => {
  console.log('get to private');
  console.log(req.cookies.AuthCookie);
  //console.log(cookieParser(req.cookies.AuthCookie.data));
  res.render("private");
  next();
})

// We can now navigate to localhost:3000
app.listen(3000, function () {
  console.log(
    "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
  );
});
