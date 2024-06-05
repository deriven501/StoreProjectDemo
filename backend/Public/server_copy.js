//importing express top class and then creating express server
console.log("In server js")

const express = require('express') //express class constructor
const app = express() //invoking the class to create express app server

const adminApp = express() //A new express app for admin user

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/data', function(req, res) {
    let queryString = req.query

    console.log(queryString)
    if( queryString.session == "express") {
        res.json({"name " : queryString.name})
    } else {
        res.json(queryString)
    }
    
})

app.get('/nameByID/:id', function(req, res) {
    let queryParam = req.params["id"]

    console.log(queryParam)
    if( queryParam == 2000) {
        res.send("<h1>User is present</h1>")
    } else {
        res.send("<h1>User is not present</h1>")
    }
    
})

app.post('/adduser', function(req, res) {
    let data = req.body

    res.json(data)
    
})

app.get('/getalert', function(req, res) {
    res.sendFile(__dirname+"/Public/index.html")
    
})

// app.get('/alert_me.js', function(req, res) {
//     res.sendFile(__dirname+"/Public/alert_me.js")
    
// })

// app.all('*', function(req, res) {
//     res.sendFile(__dirname+"/Public/index.html")
// })

app.use("/admin", adminApp)

adminApp.get("/", (req, res) => {
    res.send("Hello World from Admin APP")
})

adminApp.get("/info", (req, res) => {
    res.send("No information present at the moment")
})

app.listen(3000)

console.log("api launched at localhost:3000")