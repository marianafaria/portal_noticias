module.exports = function (app) {

    app.get('/noticias', function(req, res){

        var connection = app.config.database();
        var noticiasModel = app.app.models.noticiasModel();

        noticiasModel.getNoticias(connection, function(erro, result) {
            res.render("noticias/noticias", {noticias : result});
        });
    });
};