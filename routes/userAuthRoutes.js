const axios = require('axios')
const callbackUrl = '/login/oauth2/code/github'
var port = process.env.PORT || 8000
const devUrl = `http://localhost:${port}`
const prodUrl = "https://pre-academy-site.herokuapp.com"
const githubApiBase = "https://api.github.com"

const { addUser, getUser, getAllUsers } = require('../helpers/dbHelpers')
const { handleLogin } = require('../helpers/userAuthHelpers')

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

                handleLogin(login, avatar_url, name, (user) => {
                    //TODO: Add user data to env variables
                    console.log("Got user! " + user.username)
                    res.redirect('/activities')
                })

            })
            .catch(e => console.log(e))
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        });
    });

    app.get('/users/:username', async (req, res) => {
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