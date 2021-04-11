//ruta para almacenar los enlaces
const controller = require("../controllers/controllerStudent");
const express = require('express');//voy a usar el modulo express
const router =express.Router();
const multer = require('multer');
const storage = require('../utils/multer');
const uploader = multer({storage});


router.use(function(request, response,next) {
    response.header(
        "Access-Control-Allow-Headers",
       "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

/*Obtiene los grupos del estudiante*/
router.post("/getGroups",controller.getGroups);

/*Obtiene todos los equipos del estudiante (de distintos grupos)*/
router.get("/getTeams",controller.getTeams);



/*Obtiene tabla equipoEstudiante*/
router.get("/getTeam",controller.getTeam);

/*Obtiene tabla equipoEstudiante*/
router.get("/getTeamStudent",controller.getTeamStudent);


/*Obtiene equipo del estudiante correspondiente a un grupo en concreto*/
router.get("/getTeamStudentGroup",controller.getTeamStudentGroup);

/*Obtiene los equipos del grupo*/
router.get("/getTeamsGroup",controller.getTeamsGroup);

/*Obtiene los mensajes del estudiante segun su grupo*/
router.get("/getMessages",controller.getMessages);

/*Obtiene el mensaje del estudiante segun su grupo*/
router.get("/getMessage",controller.getMessage);

/*edita el tipo de mensaje*/
router.post("/editMessage",controller.editMessage);

/*el estudiante se une a un equipo*/
router.get("/joinTeam",controller.joinTeam);


/*Obtiene el desafio del estudiante segun su grupo*/
router.get("/getChallenge",controller.getChallenge);

/*Obtiene los desafios del estudiante segun su grupo*/
router.get("/getChallenges",controller.getChallenges);

/*Obtiene el escrito del estudiante segun su grupo*/
router.get("/getWriting",controller.getWriting);

/*Obtiene el escrito del estudiante segun su grupo*/
router.get("/getWritingWriter",controller.getWritingWriter);


/*Obtiene los escritos de un equipo*/
router.get("/getWritingsTeam",controller.getWritingsTeam);

/*Obtiene los escritos de un estudiante según grupo*/
router.get("/getWritingsStudent",controller.getWritingsStudent);

/*Envio el escrito del estudiante */
router.post("/sendWriting",controller.sendWriting);

/*Edito el escrito del estudiante */
router.post("/editWriting",controller.editWriting); 

/*Obtiene los ficheros multimedia del escrito del estudiante*/
router.get("/getMultimediaWriting",controller.getMultimediaWriting);

/*Obtiene los ficheros multimedia del desafio */
router.get("/getMultimediaChallenge",controller.getMultimediaChallenge);

/*Envia los ficheros multimedia del escrito del estudiante*/
router.post("/sendMultimedia",uploader.array('imgCollection', 20),controller.sendMultimedia);

/*Elimina fichero multimedia del escrito*/
router.post("/deleteFile",controller.deleteFile); 

/*Envio mensaje de un usuario */
router.post("/sendMessage",controller.sendMessage);

/*Crea un equipo */
router.post("/createTeam",controller.createTeam);

/*Edita un equipo */
router.post("/editTeam",controller.editTeam);

/*Edita un equipo */
router.post("/deleteTeam",controller.deleteTeam);

/*agrega un estudiante a un equipo */
router.post("/addStudentTeam",controller.addStudentTeam);

/*elimina un estudiante de un equipo */
router.post("/leaveStudentTeam",controller.leaveStudentTeam);


/*Obtiene los estudiantes sin equipo de un grupo */
router.get("/getStudentWithoutTeam",controller.getStudentWithoutTeam);

/*Obtiene los estudiantes sin equipo de un grupo */
router.get("/getMembersTeam",controller.getMembersTeam);

module.exports = router;