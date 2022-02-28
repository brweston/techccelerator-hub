const { fullAccessUsers } = require('../constants/constants')

function ensureLoggedIn(res) {
    if (!(process.env.USERNAME && process.env.NAME && process.env.AVATAR_URL)) {
        res.redirect('/login')
    }
}

function isPTOnly() {
    return !(fullAccessUsers.includes(process.env.USERNAME))
}

module.exports = { ensureLoggedIn, isPTOnly }