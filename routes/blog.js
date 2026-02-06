const express = require("express");

// importing the router from express
const router = express.Router();  

// now import the controllers
const {dummy} = require("../controllers/UnlikeController");

router.get("/dummy",dummy)
module.exports = router;



