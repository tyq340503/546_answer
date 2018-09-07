const express = require("express");
const router = express.Router();
const data = require("../data");
const postData = data.posts;

function format(data){
  if(!Array.isArray(data)){
    data=[];
  }
  let arr=[];
  data.map((i)=>{
     arr.push({'_id':i._id,'title':i.title})
  })
  return arr;
};

router.get("/:id", async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(404).json({ message: "Post not found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    
    res.json(format(postList));
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  let data = req.body;
  postData.addPost(data.title, data.ingredients, data.steps)
    .then((backData) => {
      res.json(backData)
    }).catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:id', async (req, res) => {
  try {

    const putList = await postData.updatePost(req.params.id, req.body);
    res.json(putList);
  } catch (error) {
    res.status(501).json({ error: error });
  }
})

router.patch('/:id', async (req, res) => {
  try {

    const putList = await postData.updateOnePost(req.params.id, req.body);
    res.json(putList);
  } catch (error) {
    res.status(501).json({ error: error });
  }
})

router.delete('/:id', async (req, res) => {
  try {

    const putList = await postData.removePost(req.params.id);
    res.json(putList);
  } catch (error) {
    res.status(501).json({ error: error });
  }
})

module.exports = router;