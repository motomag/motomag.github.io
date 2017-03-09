var express = require("express"),
    app = express()
    
var IP = process.env.IP || '0.0.0.0',
    PORT = process.env.PORT || 8080

app.use(express.static("."))

app.listen(8080, function() { console.log('listening on https://test1-tken.c9users.io/') })