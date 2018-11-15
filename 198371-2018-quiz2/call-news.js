var request1 = require("request");
var http = require("http");
var url = "https://www.kku.ac.th/ikku/api/news/services/topNews.php";

request1.get(url, (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var newsOBJ = JSON.parse(body);
    var news = newsOBJ.news;

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });

        res.write("<h2>Current KKU News</h2>");
        
        res.write("<ol>");
        
        for (var i = 0; i < news.length; i++) {
            res.write("<li><a href=\"" + news[i].url + "\" target=\"_blank_\">" + news[i].title + "</a></br>");
            res.write("<img src=\"" + news[i].picnewsUrl[0] + "\" style=\"width: 400px;\"></li>");
        }
        res.write("</ol>");
        
    }).listen(8080, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8080')
});