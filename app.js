var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var home = require('./app/routes/home');
home(app);

var formulario = require('./app/routes/formulario_inclusao_noticia');
formulario(app);

app.listen(3000, function(){
    console.log('Sucesso');
});