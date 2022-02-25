// LOAD ENVIRONMENT VARIABLES
require('dotenv').config()

// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 8000
const { sections, sectionKeys } = require('./constants/pre-techccelerator');
const { getBackKey, getNextKey} = require('./constants/sidebar')
const workshopsConstants = require('./constants/workshops')
const { tabs } = require('./constants/constants')
const { startDB } = require('./helpers/dbHelpers')

startDB()

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')

function ensureLoggedIn(res) {
    if (!(process.env.USERNAME && process.env.NAME && process.env.AVATAR_URL)) {
        res.redirect('/login')
    }
}

/* USER AUTH ROUTES */
require('./routes/userAuthRoutes')(app)

/* CRYPTO ROUTES (TODO - MOVE TO ACTIVITY ROUTES) */
require('./routes/cryptoRoutes')(app)

app.get('/', (req, res) => {
    ensureLoggedIn(res)
    res.redirect("/curriculum")
})

/* PAGE ROUTES */
tabs.forEach(t => {
    app.get(`/${t}`, (req, res) => {
        ensureLoggedIn(res)
        res.render(
            'index',
            {
                userData: {name: process.env.NAME, avatar_url: process.env.AVATAR_URL},
                tabData: {
                    tabs,
                    activeTab: t
                },
                pageData: getPageData(t)
            }
        )
    })
})

/* PRE TECHCCELERATOR ROUTES */
app.get('/pre-techccelerator/:s/:ss', (req, res) => {
    ensureLoggedIn(res)
    //s and ss are shifted by +1 to start at 1 in urls
    const {s, ss } = req.params
    const pageData = getPreTechcceleratorPageData(s-1, ss-1)
    res.render('index',
        {
            userData: {name: process.env.NAME, avatar_url: process.env.AVATAR_URL},
            tabData: {
                tabs,
                activeTab: 'pre-techccelerator'
            },
            pageData
        }
    )
})

app.get('/workshops/:s/:ss', (req, res) => {
    ensureLoggedIn(res)
    //s and ss are shifted by +1 to start at 1 in urls
    const {s, ss } = req.params
    const pageData = getWorkshopsPageData(s-1, ss-1)
    res.render('index',
        {
            userData: {name: "Bridget", avatar_url: "nonelol"},
            tabData: {
                tabs,
                activeTab: 'workshops'
            },
            pageData
        }
    )
})

function getPageData(tab) {
    //TODO: MOVE TO CONSTANTS
    let data = {}
    switch (tab) {
        case "curriculum":
            data = {}
            break;
        case "pre-techccelerator":
            data = getPreTechcceleratorPageData(0, 0)
            break;
        case 'technical-reference-package':
            data = {}
            break;
        case "workshops":
            data = getWorkshopsPageData(0, 0)
            break;
        case "activities":
            data = {}
            break;
    }
    return data
}

function getPreTechcceleratorPageData(s, ss) {
    const data = {
        sIndex: s,
        ssIndex: ss,
        sections,
        getBackKey,
        getNextKey,
    }
    return data
}

function getWorkshopsPageData(s, ss) {
    const data = {
        sIndex: s,
        ssIndex: ss,
        sections: workshopsConstants.sections,
        getBackKey,
        getNextKey,
    }
    return data
}

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
