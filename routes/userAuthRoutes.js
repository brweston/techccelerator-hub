const axios = require('axios')
const callbackUrl = '/login/oauth2/code/github'
var port = process.env.PORT || 8000
const devUrl = `http://localhost:${port}`
const prodUrl = "https://techccelerator-hub.herokuapp.com"
const githubApiBase = "https://api.github.com"

const { addUser, getUser, getAllUsers } = require('../helpers/dbHelpers')
const { handleLogin } = require('../helpers/userAuthHelpers')

const { codes } = require('../constants/constants')

module.exports = async function (app) {
    app.get('/github-oauth', (req, res) => {
        const uri = process.env.NODE_ENV === "production" ? prodUrl + callbackUrl : devUrl + callbackUrl
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&type=user_agent&redirect_uri=${uri}`);
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
            const token = r.data['access_token']
            process.env.GH_TOKEN = token
            const h = {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3.raw',
                'Authorization': `token ${token}`
            }
            axios.get(githubApiBase + "/user", {headers: h})
            .then(rr => {
                var { login, avatar_url, name } = rr.data
                const username = login //gh named it login which is confusing

                getUser(username, (user) => {
                    if (!user) {
                        res.render('register', {username, name, avatar_url})
                    }
                    else {
                        process.env.USERNAME = user.username
                        process.env.NAME = user.full_name
                        process.env.AVATAR_URL = avatar_url
                        res.redirect('/home')

                    }
                })

                /* handleLogin(login, name, (user) => {
                    //console.log("Got user! " + JSON.stringify(user))
                    if (!user)
                    process.env.USERNAME = user.username
                    process.env.NAME = user.full_name
                    process.env.AVATAR_URL = avatar_url
                    res.redirect('/home')
                }) */

            })
            .catch(e => console.log(e))
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        });
    });

    app.get('/login', (req, res) => {
        res.render("login")
    })

    app.get('/logout', (req, res) => {
        process.env.USERNAME = ""
        process.env.NAME = ""
        process.env.AVATAR_URL = ""
        /* let b = { access_token: process.env.GH_TOKEN,
        client_id: process.env.CLIENT_ID}
        let opts = { headers: { accept: 'application/json' } };
        axios.delete(`${githubApiBase}/applications/{client_id}/token`, {data: b}, opts).then(r => {
            console.log("success")
        }).catch(e => console.log(e)) */
        process.env.GH_TOKEN = ""
        res.redirect('/login')
    })

    app.post('/register', (req, res) => {
        //TODO verify token
        const { username, name, code, avatar_url} = req.body

        if (codes.includes(code)) {
            addUser(username, name, 0)
            process.env.USERNAME = username
            process.env.NAME = name
            process.env.AVATAR_URL = avatar_url
            res.redirect('/home')
        } else{
            res.render('not-authorized')
        }
        
    })
    app.get('/register', (req, res) => {
        res.render('register', {username: "brweston", avatar_url: "some", name: "Bridget Weston"})
    })
}