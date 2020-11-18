"use strict"

//const { verifySignUp } = require("../middleware");
const controller_auth = require("../controllers/controllerAuth");
const express = require("express");
const router = express.Router();

router.use(function(request, response,next) {
    response.header(
        "Access-Control-Allow-Headers",
       "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/signin", controller_auth.signIn);

/*---------------------------------------------------------*/
//Data export
module.exports = router;