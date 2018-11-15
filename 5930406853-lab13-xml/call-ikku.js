var request1 = require("request");
var http = require("http");
var url = "https://www.kku.ac.th/ikku/api/activities/services/topActivity.php";

request1.get(url, (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var activityOBJ = JSON.parse(body);
    

    var act = activityOBJ.activities;
    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });

        res.write("<h2 style=\"margin-left: 20px;\">Top Activities in Khon Kaen University</h2>");
        res.write("<hr>");
        
        res.write("<table>");
        res.write("<tbody>");
        
        for (var i = 0; i < act.length; i++) {
            res.write("<tr>");
            res.write("<td style=\"padding-left: 20px;\">" + (i+1) + ". </td>");
            res.write("<td style=\"padding-left: 20px;\">" + act[i].dateSt + "</td>");
            res.write("<td style=\"padding-left: 20px;\"><a href=\"" + act[i].url + "\">" + act[i].title + "</a></td>");
            // you cat setting width in style => width: XX%
            res.write("<td style=\"padding-left: 20px;\">" + act[i].contact.phone + "</td>");
            res.write("<td style=\"padding-left: 20px;\">");
        }
        res.write("</table>");
        res.write("</tbody>");
        
    }).listen(8080, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8080')
});