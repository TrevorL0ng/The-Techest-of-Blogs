// Bringing in modules
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// Should be all we need for this
class Post extends Model {}

// Creating the post properties
Post.init({
    id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },

    name:{
    type: DataTypes.STRING,
    allowNull:false
    },

    body:{
    type: DataTypes.TEXT
    },

    dateCreated:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
    },

    userID:{
    type: DataTypes.INTEGER,
    references:{
        model: 'User',
        key: 'id'
    }}
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post'
});

module.exports = Post;