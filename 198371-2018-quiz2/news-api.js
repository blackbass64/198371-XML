var express = require('express');
var app = express();

const file_read = 'data_read.json',
    file_write = 'data_write.json';

const jsonfile = require('jsonfile')

app.get('/', function (req, res) {
    jsonfile.readFile(file_read, function (err, obj) {
        if (err) {
            console.error(err)
        }

        var newsArr = [];
        for (var i = 0; i < obj.news.length; i++) {
            var title = obj.news[i].title;
            var url = obj.news[i].url;
            var img = obj.news[i].picnewsUrl[0];

            var newObj = {};
            newObj.title = title;
            newObj.url = url;
            newObj.img = img;
            newsArr.push(newObj);
        }

        const obj2 = {
            headlines: 'Current KKU News',
            news: newsArr
        }

        jsonfile.writeFile(file_write, obj2, function (err) {
            if (err) console.error(err)
            res.send(obj2);
        })
    })
}).listen(8080);