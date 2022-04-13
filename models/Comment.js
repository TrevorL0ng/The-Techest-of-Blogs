// Bringing in modules
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// Setting up class
class Comment extends Model{}

// Creating Comment properties
Comment.init({
    id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },

    authorName:{
    type: DataTypes.STRING,
    allowNull: false
    },

    comment:{
    type: DataTypes.TEXT
    },

    commentDate:{
    type: DataTypes.DATE,
    allowNull:false,
    defaultValue: DataTypes.NOW
    },

    userID:{
    type: DataTypes.INTEGER,
    references:{model:'User', key:'id'}
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored:true,
    modelName:'Post'
});

module.exports = Comment;