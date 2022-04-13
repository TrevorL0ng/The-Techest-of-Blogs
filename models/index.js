const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {foreignKey: 'userID', onDelete: 'CASCADE'});

Post.belongsTo(User, {foreignKey:'userID'});

module.exports = {User, Post};