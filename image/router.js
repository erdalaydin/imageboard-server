const Router = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (req, res) => {
  Image.findAll(req.body)
    .then(image => res.send(image))
    .catch();
});

module.exports = router;
