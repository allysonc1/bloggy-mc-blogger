
const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Comment = sequelize.define('comment', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

Comment.belongsTo(User);// User is a model - this adds a foreign key and sets an association


// add a sync to make sure the table exists
Comment.sync()
    .then(() => {
        console.log('Created Comment table!');
    });

module.exports = Comment;

