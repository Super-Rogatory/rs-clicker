const db = require('./database');
const User = require('./User');

/*
    Create associates between User and Weapons
*/
async function createUserTable(){
    try {
        await User.sync();
        console.log('db: created User table')
    } catch (err) {
        console.log(err, '| unable to create table')
    }
}
async function bootstrapDb(){
    try {
        await db.authenticate(); 
        console.log('db: we have successfully connected to the database.');
    } catch (err) {
        console.log('Failed to connect to the database');
    }
}

bootstrapDb();
createUserTable();


module.exports = {
    db,
    User
}

