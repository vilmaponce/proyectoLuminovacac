/* DECLARACIÓN DE RUTAS, CON SUS MÉTODOS
 Y EL LLAMADO AL CONTROLADOR CON EL MÉTODO
 ESPECÍFICO PARA CADA OPCIÓN.
 */

// 1 - Importamos el módulo express y el módulo del controlador 
const express = require("express");
const luminovaController = require("../controllers/luminovaController");
// 2 - Instanciamos Router de express
const router = express.Router();
// 3 - Realizamos las solicitudes con la lógica que proviene de luminovaController.js para cada peticion 
router.get("/saludo", luminovaController.saludo);
router.post("/crear-usuario", luminovaController.createUser);
router.get("/acceder", luminovaController.acceder);

// 4 - Exportamos el módulo
module.exports = router;