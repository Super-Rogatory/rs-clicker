const path = require('path');
require('dotenv').config(path.resolve(__dirname, '../../.env'));
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_STRING, {
    logging: false
});
async function bootstrapDb(){
    try {
        await db.authenticate();
        console.log('db: we have successfully connected to the database.');
    } catch (err) {
        console.log('Failed to connect to the database');
    }
}
bootstrapDb();
module.exports = db;

