// Pulling in needed modules
const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Checking the password on the User
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Making the User properties
User.init({
    id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },

    name:{
    type: DataTypes.STRING,
    allowNull: false,
    },

    email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{isEmail: true}
    },

    password:{
    type: DataTypes.STRING,
    allowNull:false,
    validate:{len:[8]},
    },
},
// Creation of hooks
{
    hooks:{
    beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
    }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
}
);

module.exports = User;