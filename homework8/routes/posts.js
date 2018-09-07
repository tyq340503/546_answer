const express = require("express");
const router = express.Router();


router.get("/new", (req, res) => {
  res.render("posts/new");
});

router.post("/main", (req, res) => {
  //res.render("posts/result");
  res.render("posts/main", {});
});


// router.post("/posts", (req, res, next) => {
//   // res.render("posts/new");
//   //const post = await postData.addPost(req.params.titlel, req.params.body, req.params.tags, req.params.posterId)
//   //res.render("posts/single", { post: post });
//   console.log('new post request');
//   console.log(req.body.titlel, req.body.body, req.body.posterId);
// });
router.get("/check", async (req, res) => {
  // const post = await postData.getPostById(req.params.id);
  // res.render("posts/single", { post: post });
  console.log(res.json())
});


module.exports = router;
