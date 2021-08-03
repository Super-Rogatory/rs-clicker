const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const PRIV_KEY = fs.readFileSync(
  path.resolve(__dirname, "../keys/id_rsa_priv.pem"),
  "utf8"
);
const PUB_KEY = fs.readFileSync(
  path.resolve(__dirname, "../keys/id_rsa_pub.pem"),
  "utf8"
);
const validPassword = (password, salt, hash) => {
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hash === hashedPassword;
}
const generatePassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return {salt, hash};

};
const createJWT = (user) => {
    const id = user.id;

    const expiresIn = '15s';

    const payload = {
        sub: id,
        iat: Date.now()
    }

    const signedJWT = jwt.sign(payload, PRIV_KEY, {
        expiresIn,
        algorithm: 'RS256'
    })

    return {
        token: `Bearer ${signedJWT}`,
        expires: expiresIn
    }

}
const authMiddleware = (req, res, next) => {
    // extract bearer and token from req.headers.authorization
    console.log(req.headers.authorization);
    try {
        // jwt.verify()
    } catch (err) {
        next(err);
    }
}
module.exports = { validPassword, generatePassword, createJWT, authMiddleware };
