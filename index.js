// LOAD ENVIRONMENT VARIABLES
require('dotenv').config()

let UN = "nousername"
let AV = "no_av_url"
let FN = "bridget yay"

// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 8000
const { sections, generateBackLink, generateNextLink, sectionKeys } = require('./constants');
const githubApiBase = "https://api.github.com"
const crypto = require('crypto')

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
const devUrl = `http://localhost:${port}`
const prodUrl = "https://pre-academy-site.herokuapp.com"


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

// ROUTING
app.get('/', function(req, res, next) {
    if (/*process.env.*/UN === "unknown") res.render('login')
    res.redirect('pre-techccelerator/intro/1')
    /*data = getData('intro', 1)
        res.render('pre-techccelerator', data)*/
})

/* app.get('/pre-techccelerator/intro/1', function(req, res, next) {
    if (UN === "unknown") res.render('login')
    //res.redirect('pre-techccelerator/intro/1')
    data = getData('intro', 1)
        res.render('pre-techccelerator', data)
}) */

app.get('/login', (req, res) => {
    res.render("login")
})

/*sections.forEach(s => {
    app.get(`pre-techccelerator/${s.key}`, function(req, res, next) { ///:page
        //console.log("SENT REQ to : " + req.params.)
        data = getData(s.key, 1)//req.params.page)
        res.render('pre-techccelerator', data)
    })
})*/

const sss = ['activities', 'workshops', 'curriculum', 'technical-reference-package']
sss.forEach(s => {
    app.get(`/${s}`, (req, res) => {
        res.render(s, {})
    })
})

app.get('/cryptography', (req, res) => {
    res.render('cryptography', {plain: "", encrypted: ''})
})

/* app.get('/activities', (req, res) => {
    res.render('activities', {})
})
app.get('/workshops', (req, res) => {
    res.render('workshops', {})
})
app.get('/curriculum', (req, res) => {
    res.render('curriculum', {})
})
app.get('/technical-reference-package', (req, res) => {
    res.render('technical-reference-package', {})
}) */

app.post('/encrypt', (req, res) => {
    let plain = req.body.plain || ""
    let encrypted = ""
    if (plain) {
        const salt = crypto.randomBytes(16).toString('hex')
        encrypted = crypto.pbkdf2Sync(plain, salt, 1000, 64, `sha512`).toString(`hex`)
    }
    res.render('cryptography', {plain, encrypted})
    //res.send({plain, encrypted})
})

function getData(sectionKey, page) {
    const sectionInfo = sections[sectionKeys.indexOf(sectionKey)]
    const data = {
            section: sectionKey,
            sectionInfo,
            subSectionInfo: sectionInfo.subSections[page - 1],
            page,
            sections,
            percentDone,
            generateBackLink,
            generateNextLink,
            name: UN,//process.env.USERNAME,
            avatar_url: AV,//process.env.AVATAR_URL,
            fullName: FN,//process.env.FULL_NAME,
        }
    return data
}

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
