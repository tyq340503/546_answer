const express = require('express');
const app = express();
const configRoutes = require("./route");
// const data = require('../data');
// const router = express.Router();
// const postData = data.posts;

// router.get('/', async (req, res) => {
//     try {
//         const data = await postData.getAllPosts();
//         res.json(data);
//     } catch (error) {
//         res.status(500).send()
//     }
// })
configRoutes(app);
app.listen('3000', function () {
    // var host = server.address().address;
    // var port = server.address().port;
    console.log('Example app listening on port 3000!');
    //console.log('Example app listening at http://%s:%s', host, port);
})


// module.exports = router;