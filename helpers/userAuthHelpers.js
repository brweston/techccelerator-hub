
const { addUser, getUser } = require('../helpers/dbHelpers')

function handleLogin(username, name, callback) {
    //TODO: Check if name has changed, and if so update in db
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