const router = require("express").Router();
const User = require('../db/User');
const { validPassword, generatePassword, createJWT, authMiddleware } = require("../utilities/utils");
// should be mounted on /api/users

router.get("/", authMiddleware, (req, res, next) => {
    res.status(200).json(req.jwt);
});

router.get("/:id", authMiddleware, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, { attributes: ['id', 'username', 'exp', 'currentLevel' ]});
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});


router.post("/login", async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(!user) res.status(401).json({ msg: 'user not found'});
        const isValid = validPassword(req.body.password, user.salt, user.hash);
        if(isValid) {
            // issue jwt, the object returned has a token and expires, this will be set in localStorage
            const { token, expires } = createJWT(user);
            res.status(200).json({ msg: 'user has logged in', user, token, expiresIn: expires })
        } else {
            res.status(401).json({ msg: 'you have entered the wrong password'});
        }
    } catch (err) {
        next(err);
    }
})
router.post("/register", async (req, res, next) => {
    try {
        const hashSalt = generatePassword(req.body.password);
        const newUser = {
            username: req.body.username,
            salt: hashSalt.salt,
            hash: hashSalt.hash
        }

        const userAddedToDb = await User.create(newUser);
        res.json({ msg: 'user has successfully been created', user: userAddedToDb })        
    } catch (err) {
        next(err);
    }
})

router.put("/:id", authMiddleware, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user) throw new Error('no user found');
        console.log(req.body);
        await user.update(req.body);
    } catch (err) {
        next(err);
    }
})
module.exports = router;
