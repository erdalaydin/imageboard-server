const { Router } = require("express");
const User = require("./model");
const router = new Router();
const bcrypt = require("bcryptjs");

router.post("/user", (req, res) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.create(user)
    .then(user => res.json(user))
    .catch(console.error);
});

module.exports = router;
