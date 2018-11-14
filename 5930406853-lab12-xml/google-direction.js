var request1 = require("request");
var http = require("http");

request1.get("https://maps.googleapis.com/maps/api/directions/json?origin=Khon%20Kaen&destination=Bangkok&key=AIzaSyAYo4ivP2QZzbvj-oMPjEcHOn8_TG2hTAM", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var resultOBJ = JSON.parse(body);
    
    var results = resultOBJ.routes[0].legs[0].steps;

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });
        res.write("<h2>Directions from Khon Kaen to Bangkok</h2>");
        res.write("<ol>");
        for (var i = 0; i < results.length; i++) {
            res.write("<li>" + results[i].html_instructions + "</li>");
            res.write("<div style=\"color: blue;\">(" + results[i].distance.text + ")</div>");
        }
        res.write("</ol>");
    }).listen(8077, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8077')
});