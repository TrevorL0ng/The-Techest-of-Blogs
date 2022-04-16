const router = require('express').Router();
const {Post, User} = require('../models');
const withAuth = require('../utils/auth');
const { post } = require('./api');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User, attributes:['name']}],
        });
    }
    catch(err){res.status(400).json(err);}

    const posts = postData.map((post) => post.get({plain: true}));
    res.render('homepage', {posts, logged_in: req.session});
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User, attributes:['name'], },],
        })
    }
    catch(err){res.status(400).json(err);}

    const post = postData.get({plain: true});
    res.render('post', {
        ...post, logged_in: req.session.logged_in});
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.userID, {
            attributes: {exclude: ['password']},
            include: [{model: Post}]
        })
    }
    catch(err){res.status(400).json(err);}

    const user = userData.get({plain: true});
    res.render('profile', {
        ...user, logged_in: true});
});

router.get('/login', (req, res) => {
    if (req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

module.exports = router;