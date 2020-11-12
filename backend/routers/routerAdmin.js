/*
* Name_file : routerAdmin
* Descripcion: Contiene los prototipos de todas las funciones que son exclusivas a los administradores.
* parameters:
    @mysql
    @express
    @path
    @bodyParser
    @controller
    @app
    @config
*/

/*--------------------------------------------------*/
// Dependencies
"use strict"

const config = require("../BBDD/config");
const controller = require("../controllers/controllerAdmin");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = express.Router();

/*--------------------------------------------------*/
// Functionality systems

//Devuelve una lista con todos los usuarios confirmados.
router.get("/todos", controller.showAll);

//Devuelve una lista con todos los administradores.
router.get("/administradores", controller.showAdmins);

//Esta función devuelve todos los profesores que se acaban de apuntar y tienen que ser aceptados por un ADMIN.
router.get("/solicitudes", controller.showRequests); 

/*---------------------------------------------------------*/
//Data export
module.exports = router;