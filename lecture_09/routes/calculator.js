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
const calculator = data.calculator;

router.get("/static", (req, res) => {
  res.render("calculator/static", {});
});

router.post("/static", (req, res) => {
  res.render("calculator/static", {});
  //res.render("calculator/result",{})
});

router.get("/", (req, res) => {
  //console.log(req.query);
  res.render("server", {});
});

router.get("/server", (req, res, next) => {
  //console.log(req.query);
  //let session = req.session;
  res.render("server", {});
});


router.get("/result", (req, res, next) => {
  //console.log(req.query);
  //var obj = session.obj = session.obj;data: req.session.obj.data, err: req.session.obj.err 
  let data = req.session.obj.data;
  let err = req.session.obj.err;
  console.log(req.session.obj.data, req.session.obj.err, data, err);
  res.render("result", { data: data, err: err });
});


router.post("/", (req, res, next) => {

  //console.log('1121');
  //res.end(req.query.last);
  //console.log(JSON.stringify(req.body.number1));
  //let operation = (req.body.operation || "add").toLowerCase();
  let firstNumber = req.body.number1;
  //console.log(JSON.stringify(req.body.number1));
  //let secondNumber = parseInt(req.body.number2);
  let result;

  try {
    result = calculator.checkInput(firstNumber);
    console.log(req.session);
    req.session.obj = { data: result, err: !result };
    //console.log(req.session.obj.data);
    res.redirect('result');
    //let file = { data: result, err: !result }
    //res.render("./result", { data: result, err: !result });
    //next(file);
    //res.redirect("http://localhost:3000/result");
    return;
  } catch (e) {
    //console.log('111');
    res.render("server", {
      firstNumber: firstNumber,
    });
    return;
  }
});

module.exports = router;
