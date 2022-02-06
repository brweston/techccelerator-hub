// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 3000

const sections = [
    {
        key: "learn-js",
        name: "Learn Web Dev",
        link: "/learn-js/1",
        done: true,
        subSections: [
            {name: "What is Javascript?", link: "/learn-js/1", done: true},
            {name: "Basic syntax", link: "/learn-js/2", done: true},
            {name: "DOM Elements", link: "/learn-js/3", done: true},
        ],
    },
    {
        key: "build-game",
        name: "BUild your game!",
        link: "/build-game/1",
        done: false,
        subSections: [
            {name: "Add Movement", link: "/build-game/1", done: true},
            {name: "Game Rules", link: "/build-game/2", done: false},
            {name: "Upload to Github", link: "/build-game/3", done: false},
        ]
    },
    {
        key: "test-knowledge",
        name: "Test your knowledge",
        link: "/test-knowledge/1",
        done: false,
        subSections: [
            {name: "Section 1", link: "/test-knowledge/1", done: false},
        ]
    }
]

//False means not completed
const subSections = {
    "learn-js": [true, true, true],
    "build-game": [false, false, false],
    "test-knowledge": [false]
}

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "/public")))
app.set('view engine', 'ejs')

// ROUTING
app.get('/', function(req, res, next) {
    res.render('intro', {name: "Bridget"})
})

sections.forEach(s => {
    app.get("/" + s.key + "/:page", function(req, res, next) {
        res.render('index', {
            section: s.key,
            page: req.params.page,
            sections: sections
        })
    })
})

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
