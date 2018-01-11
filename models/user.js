

const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// add a sync to make sure the table exists
User.sync()
    .then(() => {
        console.log('Created User table!');
    });


module.exports = User;