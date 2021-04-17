const { body, validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});    
}

module.exports.noticias_salvar = function (app, req, res) {
    var noticia = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("admin/form_add_noticia", {validacao : errors.array(), noticia : noticia});
        return;
    }

    var connection = app.config.database();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(erro, result) {
        res.redirect('/noticias');
    });    
}