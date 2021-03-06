

const express = require('express');
const app = express();  // server
app.use(express.static('public'));

const posts = require('./routes/posts');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(posts);

var expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/please-work', (req, res) => {
    res.render('home', {
        title: "yay it worked"
    });
});

//server.listen(3000);
app.listen(3000, () => {
    console.log('Running on port 3000');
});


// const Post = require('./models/post');

// // middleware format
// app.use((req,res,next) => {
//     console.log(`got a request: ${req.path}`); //  ${REQ.PATH}`
//     next();
// });

// app.use(express.static('public'));  // folder named public has files to be served
// // for static data

// // 
// app.get('/', (req,res) => {
//     console.log(`yep got a get request: ${req.path}`);
//     // res.send('Hey builders!');
//     // Post.findAll()      // returns a promise
//     Post.findOne({
//         where: {
//             id: 1
//         }
//     })
//     .then(post => {        // after callback sometimes posts, sometimes post
//         debugger;
//         res.send(`<h1>${post.title}</h1>
//         <br>
//         <p>${post.content}</p>`);// posts first time
//         // must use ticks to use ${} and ?
//     });
// });

// app.get('/cats', (req, res) => {
//     console.log('kitties!')
//     res.send('Cats live here');
// });

// app.post('/', (req,res) => {
//     console.log('cats rule');
//     res.send('Hey builders, that was a post request');
// });

