var database = require('../../config/database');

module.exports = function (app) {

    var connection = database();

    app.get('/noticias', function(req, res){

        connection.query('SELECT * FROM noticias', function(erro, result) {
            res.render("noticias/noticias", {noticias : result});
        });    
    });
};