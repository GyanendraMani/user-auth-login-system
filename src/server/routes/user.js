const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const { findAll, createUsers, logInUser } = require("../controller/index")


const bcrypt = require("bcrypt");
const User = require("../model/user");

const router = express.Router();

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */


router.get("/", findAll);

router.post("/sign-up", createUsers);

router.post("/log-in", logInUser);





module.exports = router;

