const axios = require('axios')
const callbackUrl = '/login/oauth2/code/github'
var port = process.env.PORT || 8000
const devUrl = `http://localhost:${port}`
const prodUrl = "https://pre-academy-site.herokuapp.com"
const githubApiBase = "https://api.github.com"

const sequelize = require('../database')
const {User} = require('../models')
const {findOrCreateUser} = require('../dbHelpers')

let UN = "nousername"
let AV = "no_av_url"
let FN = "bridget yay"

module.exports = async function (app) {
    app.get('/github-oauth', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&type=user_agent&redirect_uri=${devUrl + callbackUrl}`);
    })

    app.get(callbackUrl, (req, res) => {
        let body = {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: req.query.code
        };
        let opts = { headers: { accept: 'application/json' } };
        axios.post(`https://github.com/login/oauth/access_token`, body, opts)
        .then(r => {
            const h = {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3.raw',
                'Authorization': `token ${r.data['access_token']}`
            }
            axios.get(githubApiBase + "/user", {headers: h})
            .then(rr => {
                var { login, avatar_url, name } = rr.data

                const user = findOrCreateUser(login, name, avatar_url)
                //process.env.USERNAME = login
                //process.env.AVATAR_URL = avatar_url
                //process.env.FULL_NAME = name
                AV = avatar_url
                FN = name
                UN = login
                res.redirect('/intro/1')
            })
            .catch(e => console.log(e))
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        });
    });

    app.get('/users/:id', async (req, res) => {
        const requestedId = req.params.id;
        const user = await User.findOne({ where: {id: requestedId}})
        res.send(user.username)
    })

    app.get('/login', (req, res) => {
        res.render("login")
    })

    app.get('/logout', (req, res) => {
        //need to delete session/env variable? how to make session cookie?
    })
}