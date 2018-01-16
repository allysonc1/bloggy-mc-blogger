const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.route('/blog')
    .post((req, res) => {
        // TODO: do this one
        // debugger
        console.log(req.body);
        Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        }).then(newPost => {
            // res.send(post);
            res.redirect(`/blog/${newPost.id}`);
        });
        // res.send('TODO: do this one');
    })
    .get((req, res) => {
        Post.findAll()
            .then(allPosts => {

                const shortPosts = allPosts.map(p => {
                    return {
                        title: p.title,
                        content: p.content.substring(0, 10) + '...',
                        id: p.id
                    };
                });

                // res.send(allPosts);
                res.render('blog-list', {
                    // posts: allPosts
                    // define posts as a key value to pass to the render function
                    posts: shortPosts
                });
            });
        
    })
    .delete((req, res) => {
        // res.send('TODO: do this one');
        
        
    });

    router.route('/blog/new')
        .get((req, res) => {
            res.render('blog-form');
        // leave data blank - no data to template
        });

    router.route('/blog/:id')
        .get((req, res) => {
                Post.findOne({
                    where: {
                        id: req.params.id
                    }
                }).then(result => {
                    res.render('blog-single', {
                        title: result.title,
                        content: result.content
                    });
                });             
        });

    module.exports = router;