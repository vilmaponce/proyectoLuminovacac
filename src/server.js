// ARCHIVO QUE COMIENZA TODO EL PROCESO:
// src/app.js
// 1- Importación del modulo express
const express = require("express");
// 2- Instanciacion del objeto express
const app = express();
// 3- Declaración del puerto
const PORT = 3000;
// 4- Llamada al modulo propio
const inscripcionRouter = require("../routes/luminovaRouter");
// 5- Utilizasción del middlewere express.json
/** Este middleware nos permite analizar los cuerpos 
 * de las solicitudes entrantes con formato JSON 
 * se encarga de convertir el cuerpo de la solicitud 
 * en un objeto JavaScript accesible a través de req.body.
 */
app.use(express.json());
// 6- Definición del prefijo principal del la ruta
app.use("/luminova", inscripcionRouter);
// 7- Inicio del servidor
app.listen(PORT, () => {console.log(`Servidor escuchando en el puerto: ${PORT}`)});