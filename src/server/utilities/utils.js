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
const saltHash = generatePassword("password");
console.log(saltHash.hash);
console.log(saltHash.salt);
console.log(validPassword('password', saltHash.salt, saltHash.hash))
