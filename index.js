require('dotenv').config()
console.log(process.env)


// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 3000
const { sections, generateBackLink, generateNextLink } = require('./constants');
const githubApiBase = "https://api.github.com"

var numSubSections = 7;
var percentDone = 57;

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')
const sequelize = require('./database')
const {User} = require('./models')
const {findOrCreateUser} = require('./dbHelpers')
sequelize.sync().then(() => console.log('db is ready'))
const axios = require('axios')
const callbackUrl = '/login/oauth2/code/github'



var token = "";
var username;
var imgUrl = "";
var fullName;

// DATABASE ROUTING
/*app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
        res.send("User is inserted")
    })
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})*/

app.get('/github-oauth', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&type=user_agent&redirect_uri=http://localhost:3000${callbackUrl}`);
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
        token = r.data['access_token'];
        const h = {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3.raw',
            'Authorization': `token ${token}`
        }
        axios.get(githubApiBase + "/user", {headers: h})
        .then(rr => {
            //username = rr.data.login
            var { login, avatar_url, name, email } = rr.data
            console.log(login)
            console.log(avatar_url)
            console.log(name)
            console.log(email)
            imgUrl = avatar_url
            username = login;
            fullName = name;

            const user = findOrCreateUser(username, fullName, imgUrl)
            res.render('intro', {name: user.name})
            //check if we have user register already
            //if we do, change api key in db
            //if not, redirect to register page
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

// ROUTING
app.get('/', function(req, res, next) {
    if (token === "") res.render('login')
    res.render('intro', {name: fullName})
})

app.get('/login', (req, res) => {
    res.render("login")
})

sections.forEach(s => {
    app.get("/" + s.key + "/:page", function(req, res, next) {
        res.render('index', {
            section: s.key,
            sectionInfo: s,
            subSectionInfo: s.subSections[req.params.page - 1],
            page: req.params.page,
            sections,
            percentDone,
            generateBackLink,
            generateNextLink,
            name: username,
            avatar_url: imgUrl,
            fullName,
        })
    })
})

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
