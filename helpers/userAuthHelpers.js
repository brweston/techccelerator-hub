
const { addUser, getUser } = require('../helpers/dbHelpers')

function handleLogin(username, name, callback) {
    //TODO: Check if name has changed, and if so update in db
    getUser(username, (user) => {
        callback(user)
        /* if (!user) {
            console.log(`new user! @${username}`)
            handleRegisterUser(username, name)
            //const newUser = addUser(username, name, 0)
            //callback(newUser)
        }
        else {
            callback(user)
        } */
    })
    
}

function handleRegisterUser(username, name) {
    //res.render()
}

module.exports = { handleLogin }