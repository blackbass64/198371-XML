var request1 = require("request");
request1.get("http://httpbin.org/ip", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var result = JSON.parse(body);
    var ip = result.origin;
    console.dir(ip);
})