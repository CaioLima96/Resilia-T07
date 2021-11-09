const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    let abc ="Hello World"
    res.send(abc)
})
 
app.listen(3000)
