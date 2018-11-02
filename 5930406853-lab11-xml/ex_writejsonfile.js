var express = require('express');
var app = express();
const jsonfile = require('jsonfile')
const file = 'data.json'

app.get('/', function (req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        // console.dir(obj)
        res.send(obj)
        var obj_course = obj["courses"]
        var course = obj_course[1]
        var residence = obj["places"]["residence"]
        console.log('=== The values of the second course and the residance ===');
        console.log('Studying ' + course + ' living in ' + residence)
    })
}).listen(8080);