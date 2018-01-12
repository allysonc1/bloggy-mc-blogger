

const express = require('express');
const app = express();  // server

const Post = require('./models/post');

// 
app.get('/', (req,res) => {
    console.log('yep got a get request');
    // res.send('Hey builders!');
    // Post.findAll()      // returns a promise
    Post.findOne({
        where: {
            id: 1
        }
    })
    .then(post => {        // after callback sometimes posts, sometimes post
        debugger;
        res.send(`<h1>${post.title}</h1>
        <br>
        <p>${post.content}</p>`);// posts first time
        // must use ticks to use ${} and ?
    });
});

app.get('/cats', (req, res) => {
    console.log('kitties!')
    res.send('Cats live here');
});

app.post('/', (req,res) => {
    console.log('cats rule');
    res.send('Hey builders, that was a post request');
});


//server.listen(3000);
app.listen(3000, () => {
    console.log('Running on port 3000');
});
