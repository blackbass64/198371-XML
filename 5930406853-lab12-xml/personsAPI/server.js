var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Person = require('./api/modules/personModel'),
    bodyParser = require('body-parser');

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Persondb');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/personRoutes');
routes(app);

app.listen(port);
console.log('person RESTful API server started on: ' + port);