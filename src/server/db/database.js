const path = require('path');
require('dotenv').config(path.resolve(__dirname, '../../.env'));
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_STRING, {
    logging: false
});

module.exports = db;

