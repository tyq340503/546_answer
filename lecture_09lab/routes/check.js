const express = require("express");
const router = express.Router();
const data = require("../data");
var cookieParser = require('cookie-parser');
var session = require('express-session');

router.use(cookieParser('sessiontest'));
router.use(session({
  secret: 'sessiontest',//与cookieParser中的一致
  resave: true,
  saveUninitialized: true
}));
const check = data.check;

// router.post("/static", (req, res) => {
//   res.render("calculator/static", {});
//   //res.render("calculator/result",{})
// });

router.post("/addto.html", (req, res) => {
  //res.render("calculator/static", {});
  //res.render("calculator/result",{})
  console.log(req.body);
  const data = check.makeToDo(req.body.name, req.body.check);
  console.log(data);
  if (data.notDone) {
    res.render("partials/danger");
  } else {
    res.render("partials/todo_item", { layout: null, ...data });
  }
});


router.post("/", (req, res) => {
  //res.render("calculator/result",{})
  const data = check.makeToDo(req.body.name, req.body.check);
  console.log(data);
});

module.exports = router;
