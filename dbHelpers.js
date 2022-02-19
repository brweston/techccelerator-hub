const sequelize = require('./database')
const {User} = require('./models')

const getAllUsers = async function() {
    const users = await User.findAll();
    return users
}

const getUser = async function(username) {
    const user = awaitUser.findOne({ where: { username } });
    return user
}

const findOrCreateUser = async function(username, name, avatar_url) {
    const [user, created] = await User.findOrCreate({
        where: { username },
        defaults: {name, avatar_url}
    })
    return user
}

const addUser = async function(username, name, avatar_url) {
    User.create({username, name, avatar_url}).then(() => {
        res.send("User is inserted")
    })
}

module.exports = {findOrCreateUser}