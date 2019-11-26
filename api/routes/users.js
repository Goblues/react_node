var express = require("express");
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", function(req, res) {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Jung JIn Woo",
      text: "yoga"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Lee Young Hyun",
      text: "Pilates"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Seo Jong Min",
      text: "G.X"
    }
  ]);
});

module.exports = router;
