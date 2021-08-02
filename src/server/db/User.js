const Sequelize = require('sequelize');
const db = require('./database');
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    exp: {
        type: Sequelize.NUMBER,
        defaultValue: 0
    },
    hash: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    }
})
module.exports = User;
