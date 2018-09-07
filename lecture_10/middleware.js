const userdata = require('./user');
//const bcrypt = require('bcryptjs');
const bcrypt = require("bcrypt");

var middlewareObj = {};

middlewareObj.auth = function (req, resp, next) {
    console.log(req.body);

    let compareToMerlin = false;

    // userdata.filter((i) => {
    //     if (req.body.name == i.username) {
    //         compareToMerlin = await bcrypt.compare(req.body.password, i.hashedPassword);
    //         if (compareToMerlin == true) {
    //             console.log('in middleware and right password');
    //             resp.cookie('AuthCookie', { name: req.body.name, data: i }, { singed: true });
    //             return next();
    //         } else {
    //             console.log("wrong password or username");
    //             resp.send({ error: "wrong password or username" });
    //         }
    //     }
    // })

    userdata.forEach((i) => {
        // if (i.username == req.body.name && i.password == req.body.password) {

        //     resp.cookie('AuthCookie', { name: req.body.name, data: i }, { singed: true });

        //     return next();
        //     // return;
        // }
        if (i.username == req.body.name) {
            bcrypt.compare(req.body.password, i.hashedPassword, function (err, res) {
                // res === true 
                if (res == true) {
                    console.log('in middleware and right password');
                    resp.cookie('AuthCookie', { name: req.body.name, data: i }, { singed: true });
                    return next();
                }else{
                    console.log("wrong password or username");
                    resp.send({ error: "wrong password or username" });  
                }
            });
        }
    })
    //return next();
}

middlewareObj.isLoggedIn = function (req, res, next) {

    if (req.cookies.AuthCookie) {
        //res.render("private");
        return next();
    }
    //req.flash("error", "You need to be logged in to do that");
    res.status(403).redirect("/error");
}

middlewareObj.hasLoggedIn = function (req, res, next) {

    if (req.cookies.AuthCookie) {
        res.redirect("/private");
    } else {
        next();
    }
}


module.exports = middlewareObj;