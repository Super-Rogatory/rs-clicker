const Sequelize = require('sequelize');
const db = require('./database');
const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    exp: {
        type: Sequelize.INTEGER,
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
