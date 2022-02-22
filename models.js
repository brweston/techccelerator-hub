const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')
class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    avatar_url: {
        type: DataTypes.STRING
    },
    last_pt_completed: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = {User};