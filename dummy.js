
// fetch existing user and have him post a blog post?

const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');

User.findOne({
    where: {
        id: 1
    }
})
.then(author => {
    // now create a post!
    Post.create({
        title: 'First post!',
        content: 'It was the best of times, it was the worst of times'
    }).then(post => {
        post.setUser(author);
        // post.setComments();
        post.save();
    })
})

User.findOne({
    where: {
        id: 1
    }
})
    .then(author => {
        Comment.create({
            title: 'First comment!',
            content: 'It was the best of times, it was the worst of times is the stupidest thing I ever heard'
        }).then(comment => {
            comment.setUser(author);
            // post.setComments();
            console.log('comment added');
            comment.save();
        })
    })
