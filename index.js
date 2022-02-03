// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')

// APP SETUP
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs')

// ROUTING
app.get('/', function(req, res, next) {
    res.render('index', {page: 'intro', data: {name: "Bridget"}})
})

//Learn javascript section
app.get('/sec-1', function(req, res, next) {
    res.render('index', {page: "learn-js", data: {name: "Bobby-O"}})
})
/*
WOULD THIS WORK?
for s in sections
app.post(s, function(req, res, next) {
    res.render(sections[s].name, sections[s].data)
})
*/

// START SERVER
app.listen(3000)
console.log("Server has started at localhost:3000")
