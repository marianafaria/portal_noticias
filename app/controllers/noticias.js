module.exports.noticia = function (app, req, res) {
    var connection = app.config.database();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(erro, result) {
        res.render("noticias/noticia", {noticia : result});
    });
}

module.exports.noticias = function (app, req, res) {
    var connection = app.config.database();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(erro, result) {
        res.render("noticias/noticias", {noticias : result});
    });
}