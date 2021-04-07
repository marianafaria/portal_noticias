var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var home = require('./app/routes/home')(app);
var formulario = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log('Sucesso');
});