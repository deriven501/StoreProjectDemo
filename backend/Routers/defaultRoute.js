//express router - class to create the route table
//define the API verbs
//define the API verbs restrictions
//doesn't needs express app invocation
//we can work same way we did with express app

let express = require("express")
let defaultRouter = express.Router({caseSensitive: true})

defaultRouter.get('/', function (req, res) {
    res.send('Hello World')
})

defaultRouter.get('/data', function(req, res) {
    let queryString = req.query

    console.log(queryString)
    if( queryString.session == "express") {
        res.json({"name " : queryString.name})
    } else {
        res.json(queryString)
    }
    
})

defaultRouter.get('/nameByID/:id', function(req, res) {
    let queryParam = req.params["id"]

    console.log(queryParam)
    if( queryParam == 2000) {
        res.send("<h1>User is present</h1>")
    } else {
        res.send("<h1>User is not present</h1>")
    }
    
})

//Browser don't allow you to post
defaultRouter.post('/adduser', function(req, res) {
    let data = req.body

    res.json(data)
    
})

defaultRouter.get('/getalert', function(req, res) {
    res.sendFile(__dirname+"/Public/index.html")
    
})

// app.get('/alert_me.js', function(req, res) {
//     res.sendFile(__dirname+"/Public/alert_me.js")
    
// })

// app.all('*', function(req, res) {
//     res.sendFile(__dirname+"/Public/index.html")
// })

module.exports = defaultRouter
