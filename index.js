

const express = require('express');
const app = express();  // server

// 
app.get('/', (req,res) => {
    res.send('Hey builders!');
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
