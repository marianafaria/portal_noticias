const { body, validationResult } = require('express-validator');

module.exports = function (app) {

    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
    });

    app.post('/noticias/salvar',
    body('titulo', 'Título é obrigatório').notEmpty(),
    body('resumo', 'Resumo é obrigatório').notEmpty(),
    body('resumo', 'Resumo deve conter entre 10 e sem caracteres').isLength({ min: 10, max:100 }),
    body('autor', 'Autor é obrigatório').notEmpty(),
    body('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'}),
    body('noticia', 'Notícia é obrigatória').notEmpty(),
    function(req, res){
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
    });
};