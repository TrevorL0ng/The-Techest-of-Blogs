const router = require('express').Router();
const {Post, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
        const postData = await Post.findAll({
            include: [{model: User, attributes:['name']}],
        });

    const Posts = postData.map((Post) => Post.get({plain: true}));
    res.render('homepage', {Posts, logged_in: req.session});
});

router.get('/Post/:id', async (req, res) => {
    
        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User, attributes:['name'], },],
        })

    const Post = postData.get({plain: true});
    res.render('Post', {
        ...Post, logged_in: req.session.logged_in});
});

router.get('/profile', withAuth, async (req, res) => {

        const userData = await User.findByPk(req.session.userID, {
            attributes: {exclude: ['password']},
            include: [{model: Post}]
        })
    

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