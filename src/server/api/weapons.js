const router = require("express").Router();

// should be mounted on /api/weapons
router.get("/", (req, res, next) => {
  res.send({ msg: "hello world" });
});

module.exports = router;
