'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: {
        type: String,
        require: 'Kindly enter the name of the person'
    },
    weight: {
        type: String,
        require: 'enter weight'
    },
    country: {
        type: String,
        default: 'Thailand'
    }
});

module.exports = mongoose.model('Person', PersonSchema);