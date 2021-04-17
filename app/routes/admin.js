const { check, validationResult } = require('express-validator');

module.exports = function (app) {
    app.use(check());

    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        check('titulo', 'Título é obrigatório').notEmpty();
        check('resumo', 'Resumo é obrigatório').notEmpty();
        check('resumo', 'Resumo deve conter entre 10 e sem caracteres').isLength({ min: 10, max:100 });;
        check('autor', 'Autor é obrigatório').notEmpty();
        check('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        check('noticia', 'Notícia é obrigatória').notEmpty();

        const errors = validationResult(req);

        if (errors) {
            res.render("admin/form_add_noticia");
            return;
        }

        var connection = app.config.database();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, result) {
            res.redirect('/noticias');
        });
    });
};