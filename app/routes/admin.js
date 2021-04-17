const { body, validationResult } = require('express-validator');

module.exports = function (app) {

    app.get('/formulario_inclusao_noticia', function(req, res){
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar',
    body('titulo', 'Título é obrigatório').notEmpty(),
    body('resumo', 'Resumo é obrigatório').notEmpty(),
    body('resumo', 'Resumo deve conter entre 10 e sem caracteres').isLength({ min: 10, max:100 }),
    body('autor', 'Autor é obrigatório').notEmpty(),
    body('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'}),
    body('noticia', 'Notícia é obrigatória').notEmpty(),
    function(req, res){
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
};