//ruta para almacenar los enlaces
const controller = require("../controllers/controllerStudent");
const express = require('express');//voy a usar el modulo express
const router = express.Router();

const multer = require('multer');
const storage = require('../utils/multer');
const uploader = multer({ storage });

router.use(function (request, response, next) {
    response.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

//-----------------------------------------------------GROUPS----------------------------------------------------------------//

/*Obtiene los grupos del estudiante*/
router.post("/getGroups", controller.getGroups);

//-----------------------------------------------------CHALLENGES----------------------------------------------------------------//

/*Obtiene el desafio del estudiante segun su grupo*/
router.get("/getChallenge", controller.getChallenge);

/*Obtiene los desafios del estudiante segun su grupo*/
router.get("/getChallenges", controller.getChallenges);

/*Obtiene los desafios del estudiante (sin tener en cuenta el grupo del estudiante)*/
router.get("/getChallengesIndividual", controller.getChallengesIndividual);

//-----------------------------------------------------MULTIMEDIA-CHALLENGES---------------------------------------------------------------//

/*Obtiene los ficheros multimedia del escrito del estudiante*/
router.get("/getMultimediaWriting", controller.getMultimediaWriting);

//-----------------------------------------------------WRITINGS----------------------------------------------------------------//

/*Obtiene el escrito del estudiante segun su grupo*/
router.get("/getWriting", controller.getWriting);

/*Obtiene todos los escritos activos del estudiante*/
router.get("/getWritings", controller.getWritings);

/*Obtiene todos los escritos colaborativos activos del equipo del estudiante*/
router.get("/getWritingsCollaborative", controller.getWritingsCollaborative);

/*Obtiene el escrito del estudiante segun su grupo*/
router.get("/getWritingWriter", controller.getWritingWriter);

/*Obtiene los escritos de un equipo*/
router.get("/getWritingsTeam", controller.getWritingsTeam);

/*Obtiene los escritos de un estudiante según grupo*/
router.get("/getWritingsStudent", controller.getWritingsStudent);

/*Envio el escrito del estudiante */
router.post("/createWriting", controller.createWriting);

/*Edito el escrito del estudiante */
router.post("/editWriting", controller.editWriting);

/*Edito el escrito en equipo del estudiante */
router.post("/editWritingTeam", controller.editWritingTeam);

//-----------------------------------------------------MULTIMEDIA-WRITINGS---------------------------------------------------------------//

/*Obtiene los ficheros multimedia del desafio */
router.get("/getMultimediaChallenge", controller.getMultimediaChallenge);

/*Envia los ficheros multimedia del escrito del estudiante*/
router.post("/sendMultimedia", uploader.array('imgCollection', 20), controller.sendMultimedia);

/*Elimina fichero multimedia del escrito*/
router.post("/deleteFile", controller.deleteFile);

//-----------------------------------------------------TEAMS---------------------------------------------------------------//

/*Crea un equipo */
router.post("/createTeam", controller.createTeam);

/*Obtiene todos los equipos del estudiante (de distintos grupos)*/
router.get("/getTeams", controller.getTeams);

/*Obtiene tabla equipoEstudiante*/
router.get("/getTeam", controller.getTeam);

/*Obtiene tabla equipoEstudiante*/
router.get("/getTeamStudent", controller.getTeamStudent);

/*Obtiene equipo del estudiante correspondiente a un grupo en concreto*/
router.get("/getTeamStudentGroup", controller.getTeamStudentGroup);

/*Obtiene los estudiantes sin equipo de un grupo */
router.get("/getStudentWithoutTeam", controller.getStudentWithoutTeam);

/*Obtiene los equipos del grupo*/
router.get("/getTeamsGroup", controller.getTeamsGroup);

/*Obtiene los estudiantes sin equipo de un grupo */
router.get("/getMembersTeam", controller.getMembersTeam);

/*Edita un equipo */
router.post("/editTeam", controller.editTeam);

/*Edita un equipo */
router.post("/deleteTeam", controller.deleteTeam);

/*agrega un estudiante a un equipo */
router.post("/addStudentTeam", controller.addStudentTeam);

/*el estudiante se une a un equipo*/
router.get("/joinTeam", controller.joinTeam);

/*elimina un estudiante de un equipo */
router.post("/leaveStudentTeam", controller.leaveStudentTeam);

//-----------------------------------------------------MESSAGES---------------------------------------------------------------//

/*Envio mensaje de un usuario */
router.post("/sendMessage", controller.sendMessage);

/*Obtiene los mensajes del estudiante segun su grupo*/
router.get("/getMessages", controller.getMessages);

/*Obtiene el mensaje del estudiante segun su grupo*/
router.get("/getMessage", controller.getMessage);

/*edita el tipo de mensaje*/
router.post("/editMessage", controller.editMessage);

/*edita el tipo de mensaje*/
router.post("/deleteMessage", controller.deleteMessage);

/*busca mensaje por emisor estudiante segun su grupo*/
router.get("/searchMessageByIssuer", controller.searchMessageByIssuer);

/*busca mensaje por receptor estudiante segun su grupo*/
router.get("/searchMessageByReceiver", controller.searchMessageByReceiver);

module.exports = router;