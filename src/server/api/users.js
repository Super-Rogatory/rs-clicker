const router = require("express").Router();

// should be mounted on /api/users
router.get("/", (req, res, next) => {
  res.send({ msg: "hello world" });
});
router.post("/register", (req, res, next) => {
    
})
module.exports = router;
