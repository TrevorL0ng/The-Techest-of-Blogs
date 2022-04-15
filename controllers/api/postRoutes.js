const router = require('express').Router();
const {Post} = require('../../models/Post');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try{
        const newPost = await Post.create({
            ...req.body, userID: req.session.userID
        });
    }
    catch(err){res.status(400).json(err);}
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const postData = await Post.destroy({
            where: {id: req.params.id, userID: req.session.userID},
        });
    }
    catch(err){res.status(500).json(err);}
})

module.exports = router;