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
const { sections, generateBackLink, generateNextLink, sectionKeys } = require('./constants/pre-techccelerator-constants');
const { tabs } = require('./constants/constants')

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')
const sequelize = require('./database')
const {User} = require('./models')
const {findOrCreateUser} = require('./dbHelpers')
sequelize.sync().then(() => console.log('db is ready'))


/* USER AUTH ROUTES */
require('./routes/userAuthRoutes')(app)

/* CRYPTO ROUTES (TODO - MOVE TO ACTIVITY ROUTES) */
require('./routes/cryptoRoutes')(app)

/* PAGE ROUTES */
tabs.forEach(t => {
    app.get(`/${t}`, (req, res) => {
        res.render(
            'index',
            {
                userData: {name: "Bridget", avatar_url: "nonelol"},
                tabData: {
                    tabs,
                    activeTab: t
                },
                pageData: getPageData(t)
            }
        )
    })
})

function getPageData(tab) {
    //TODO: MOVE TO CONSTANTS
    let data = {}
    switch (tab) {
        case "curriculum":
            data = {}
            break;
        case "pre-techccelerator":
            data = getPreTechcceleratorData('intro', 1)
            break;
        case 'technical-reference-package':
            data = {}
            break;
        case "workshops":
            data = {}
            break;
        case "activities":
            data = {}
            break;
    }
    return data
}

function getPreTechcceleratorData(sectionKey, page) {
    const sectionInfo = sections[sectionKeys.indexOf(sectionKey)]
    const data = {
            section: sectionKey,
            sectionInfo,
            subSectionInfo: sectionInfo.subSections[page - 1],
            page,
            sections,
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
