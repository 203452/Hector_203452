
const mysql = require('mysql');

const host = document.getElementById('host').value;
const user = document.getElementById('user').value;
const password = document.getElementById('password').value;
const database = document.getElementById('database').value;
const port = document.getElementById('port').value;

// Agregamos los parametros de conexión 
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
});
// Conectamos al manejador de base de datos 
connection.connect(function (err) {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    } else {
        console.log('Conexión exitosa');
        window.open("agregarDatos.html")
    }
});

module.exports = connection //Exportamos la conexón para que cualquier clase la pueda requerir