const crypto = require('crypto')
module.exports = async function (app) {
    app.get('/cryptography', (req, res) => {
        res.render('cryptography', {plain: "", encrypted: ''})
    })

    app.post('/encrypt', (req, res) => {
        let plain = req.body.plain || ""
        let encrypted = ""
        if (plain) {
            const salt = crypto.randomBytes(16).toString('hex')
            encrypted = crypto.pbkdf2Sync(plain, salt, 1000, 64, `sha512`).toString(`hex`)
        }
        res.render('cryptography', {plain, encrypted})
    })
}