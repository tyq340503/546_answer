const express = require("express");
const router = express.Router();
const data = require("./data.json");

//const userData = data.query;

router.get('/about', async (req, res) => {
  try {
    const user = await require("./data.json");
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get('/story', async (req, res) => {
  try {
    //const user = await userData.getQueryStory();
    const story = await require("./story.json");
    res.json(story);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get('/education',async (req, res) => {
  try {
    //const user = await userData.getQueryEducation();
    const education = await require("./education.json");
    res.json(education);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

module.exports = router;