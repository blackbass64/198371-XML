'use strict';
module.exports = function (app) {
    var person = require('../controllers/personController');

    app.route('/persons')
        .get(person.all_persons)
        .post(person.create_a_person);

    app.route('/persons/:personId')
        .get(person.read_a_person)
        .put(person.update_a_person)
        .delete(person.delete_a_person);

};