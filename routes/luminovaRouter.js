/* DECLARACIÓN DE RUTAS, CON SUS MÉTODOS
 Y EL LLAMADO AL CONTROLADOR CON EL MÉTODO
 ESPECÍFICO PARA CADA OPCIÓN.
 */

// 1 - Importamos el módulo express
const express = require("express");
// 2 - Instanciamos Router de express
const router = express.Router();
const luminovaController = require("../controllers/luminovaController");
// 3 - Realizamos las solicitudes con la lógica que proviene de inscripcionController.js para cada peticion 
router.get("/saludo", luminovaController.saludo);
router.post("/crear-usuario", luminovaController.createUser);
router.get("/acceder", luminovaController.acceder);

// 4 - Exportamos el módulo
module.exports = router;