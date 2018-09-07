const path = require("path");
const util = require("../helper/isPalindrome");

const constructorMethod = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/index.html"));
  });
  app.post("/result", (req, res) => {
    const data = req.body["text-to-test"];
    const error = "Error: No alphanumeric letter input provided";

    let postprocess = util.simplify(data);

    if (postprocess) {
      res.render("palindrome-check/results", {"text-to-test": data, isPalindrome: util.isPalindrome(postprocess)});
    } else {
      res.status(400);
      res.render("palindrome-check/error", {error: error});
    }
  });

  app.use("*", (req, res) => {
    res.sendFile(path.resolve("static/index.html"));
  });
};
module.exports = constructorMethod;