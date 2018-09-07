const calculatorRoutes = require("./calculator");
const session = require('express-session');
const cookieParser = require('cookie-parser');

const constructorMethod = app => {
  app.use("/", calculatorRoutes);

  app.use("*", (req, res) => {
    res.redirect("/server");
  });
  app.use(cookieParser('sessiontest'));
  app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized: true
  }));
};

module.exports = constructorMethod;
