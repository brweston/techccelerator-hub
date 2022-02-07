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

// ROUTING
app.get('/', function(req, res, next) {
    res.render('intro', {name: "Bridget"})
})

sections.forEach(s => {
    app.get("/" + s.key + "/:page", function(req, res, next) {
        res.render('index', {
            section: s.key,
            info: s.subSections[req.params.page - 1],
            page: req.params.page,
            sections,
            percentDone,
        })
    })
})

// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
