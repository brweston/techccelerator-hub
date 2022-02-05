// IMPORTS
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
let ejs = require('ejs')
var port = process.env.PORT || 3000

//hello

const sections = ["learn-js", "build-game", "test-knowledge"]

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
    app.get("/" + s + "/:page", function(req, res, next) {
        res.render('index', {
            section: s,
            page: req.params.page
        })
    })
})


// START SERVER
app.listen(port)
console.log(`Server has started at localhost:${port}`)
