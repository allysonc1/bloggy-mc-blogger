

const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

Post.belongsTo(User);// User is a model  adds a foreign key?


// add a sync to make sure the table exists
Post.sync()
    .then(() => {
        console.log('Created Post table!');
    });

module.exports = Post;  

