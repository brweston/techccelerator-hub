
const { addUser, getUser } = require('../helpers/dbHelpers')

function handleLogin(username, avatar_url, name, callback) {
    getUser(username, (user) => {
        if (!user) {
            const newUser = addUser(username, name, 0)
            callback(newUser)
        }
        else {
            callback(user)
        }
    })
    
}

module.exports = { handleLogin }