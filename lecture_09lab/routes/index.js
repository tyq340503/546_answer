const calculatorRoutes = require("./check");
// const session = require('express-session');
// const cookieParser = require('cookie-parser');

const constructorMethod = app => {
  app.use("/check", calculatorRoutes);

  app.get('/',function(request, response) {
    response.render("server", {
      // pageTitle: "So Much ToDo!",
      // todoItems: todoData.getAll()
    });
  });
  // app.use(cookieParser('sessiontest'));
  // app.use(session({
  //   secret: 'sessiontest',//与cookieParser中的一致
  //   resave: true,
  //   saveUninitialized: true
  // }));
};

module.exports = constructorMethod;
