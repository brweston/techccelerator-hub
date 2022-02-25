const crypto = require('crypto')

function ensureLoggedIn(res) {
    if (!(process.env.USERNAME && process.env.NAME && process.env.AVATAR_URL)) {
        res.redirect('/login')
    }
}

module.exports = async function (app) {
    app.get('/cryptography', (req, res) => {
        ensureLoggedIn(res)
        res.render('workshops/cryptography', {plain: "", encrypted: ''})
    })

    app.post('/encrypt', (req, res) => {
        let plain = req.body.plain || ""
        let encrypted = ""
        if (plain) {
            const salt = crypto.randomBytes(16).toString('hex')
            encrypted = crypto.pbkdf2Sync(plain, salt, 1000, 64, `sha512`).toString(`hex`)
        }
        res.render('workshops/cryptography', {plain, encrypted})
    })
}