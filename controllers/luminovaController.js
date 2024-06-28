/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getStudentByDniAndPsw
 * .getAllRegistrations
 * .createStudent
 * .createRegistrations
 * .updateStudent
 * .deleteRegistration
 */

// 1 - Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos
const db = require("../db/db.js");

// MÉTODOS QUE RESPONDERAN A LAS PETICIONES DE luminovaRouter.js
// A - .getStudentByDniAndPsw - FUNCIONA FE y BE
const getStudentByDniAndPsw = (req, res) => {
    // Desestructuramos la request
    const { dni, clave } = req.query;
    // Creamos la consulta para traer los datos del alumno que concida con el dni y clave
    const sql = "SELECT * FROM alumno WHERE dni = ? AND clave = ?";
    // Enviamos la consulta a la base de datos
    db.query(sql, [dni, clave], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json(result);
    });
};

// B - .getAllRegistrations - FUNCIONA FE y BE
const getAllRegistrations = (req, res) => {
    // Desestructuramos la request
    const { dni } = req.query;
    // Creamos la consulta para traer las inscripciones que posea un alumno al brindarle su DNI
    const sql = 'SELECT i.id, c.nombre AS curso_nombre, i.estado FROM inscripcion i JOIN curso c ON i.curso_id = c.id WHERE i.alumno_dni = ?;';
    // Enviamos la consulta a la base de datos
    db.query(sql, [dni], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json(result);
    });
};

// C - .createRegistrations - FUNCIONA FE y BE
const createRegistrations = (req, res) => {
    // Desestructuramos la request
    const { dni, curso } = req.body;
    // Creamos la consulta para cargar una inscripcion
    // -- estado 1 -> inscripto
    // -- estado 0 -> dado de baja
    const sql = "INSERT INTO inscripcion (alumno_dni, curso_id, estado) VALUES (?, ?, 1);";
    
    // Enviamos la consulta a la base de datos
    db.query(sql, [dni, curso], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json({ mensaje: "¡Alumno inscripto con éxito!"});
    });
};

// D - .createStudent - FUNCIONA FE y BE
const createStudent = (req, res) => {
    // Desestructuramos la request
    const { dni, nombre, apellido, nacimiento, genero, email, telefono, calle, num, ciudad, codigoPostal, clave } = req.body;
    // Creamos la consulta para cargar una pelicula
    const sql = "INSERT INTO alumno (dni, nombre, apellido, nacimiento, genero, email, telefono, calle, num, ciudad, codigoPostal, clave) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
    // Enviamos la consulta a la base de datos
    db.query(sql, [dni, nombre, apellido, nacimiento, genero, email, telefono, calle, num, ciudad, codigoPostal, clave], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json({ mensaje: "¡Alumno cargado con éxito!" });
    });
};

// D - .updateStudent - FUNCIONA FE y BE
const updateStudent = (req, res) => {
    // Obtenemos el id que nos solicita el request
    const { email, telefono, calle, num, ciudad, codigoPostal, clave, studentDni } = req.body;
    // Creamos la consulta para traer la pelicula con ese id
    const sql = 'UPDATE alumno SET email = ?, telefono = ?, calle = ?, num = ?, ciudad = ?, codigoPostal = ?, clave = ? WHERE dni = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [email, telefono, calle, num, ciudad, codigoPostal, clave, studentDni], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json({ mensaje: "¡Datos del alumno modificados con éxito!"});
    });
};

// E - .deleteRegistration - FUNCIONA FE y BE
const deleteRegistration = (req, res) => {
    // Obtenemos el id que nos solicita el request
    const { dni, id } = req.body;
    // Creamos la consulta para traer todas las peliculas
    const sql = "UPDATE inscripcion SET estado = 0 WHERE alumno_dni = ? AND id = ?;";
    // Enviamos la consulta a la base de datos
    db.query(sql, [dni, id], (err, result) => {
        // Si sucede un error
        if (err) throw err;
        // Si todo sale bien
        res.json({ mensaje: "¡Inscripción dada de baja con éxtio!." });
    });
};

// 2 - Importamos el mdoulo
module.exports = {
    getStudentByDniAndPsw,
    getAllRegistrations,
    createStudent,
    createRegistrations,
    updateStudent,
    deleteRegistration
}

// 3 -  Configuramos el archivo db.js