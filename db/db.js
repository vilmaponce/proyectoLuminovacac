/*
    CREA EL OBJETO QUE CONECTA CON LA BASE DE DATOS.
    UTILIZA EL OBJETO mysql PROVISTO POR EL MÓDULO mysql2
*/
// 1 -Exportación del módulo mysql2
const mysql = require("mysql2");
// 2 - Creación de la coneción a la BBDD
const connection = mysql.createConnection({
    // Parámetros
    host: "localhost",
    user: "root",
    password: "Juan2801",
    database: "colegio-luminova"
});
// 3 - Iniciamos la conexión a la BBDD
connection.connect((err) => {
    if (err) {
        console.error(`Error conectando con la base de datos: ${err}`);
        return;
    }
    console.log(`Conectado a la base de datos:`);
});

module.exports = connection;