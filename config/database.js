var mysql = require('mysql');

var connMysql = function () {
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
};

module.exports = function () {
    return connMysql;
};