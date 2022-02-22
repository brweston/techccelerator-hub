const sequelize = require('./database')
const {User} = require('./models')
const { sections } = require('./constants/pre-techccelerator-constants')

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
        defaults: {name, avatar_url, last_pt_completed: sections[0].subsections[0].key}
    })
    return user
}

//use when user completes a sub-section of the pre-techccelerator
const updatePtStatus = async function(username, completed) {
    const user = await getUser(username)
    user.set({last_pt_completed: completed})
    await user.save();
}

const addUser = async function(username, name, avatar_url) {
    User.create({username, name, avatar_url}).then(() => {
        res.send("User is inserted")
    })
}

module.exports = {findOrCreateUser}