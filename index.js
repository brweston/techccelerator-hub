// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 3000
const { sections } = require('./constants');

var numSubSections = 7;
var percentDone = 57;

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')
const sequelize = require('./database')
const User = require('./User')
sequelize.sync().then(() => console.log('db is ready'))
const axios = require('axios')
const callbackUrl = '/login/oauth2/code/github'
const clientId = '279afec342c1febf3ed3'
const clientSecret = '47ee95a879c588d0b8198ca734febf75a60b6860'

// DATABASE ROUTING
app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
        res.send("User is inserted")
    })
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.get('/github-oauth', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&type=user_agent&redirect_uri=http://localhost:3000${callbackUrl}`);
})

var token = "";
app.get(callbackUrl, (req, res) => {
    const body = {
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code
    };
    const opts = { headers: { accept: 'application/json' } };
    axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then(r => {
        token = r.data['access_token'];
        res.redirect("/")
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
    res.render('intro', {name: "Bridget"})
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
        })
    })
})

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
