const express=require('express');
const { loginController, registerController } = require('../controllers/userController');

const router=express.Router();

//LOGIN USER
router.post("/login", loginController)

//REGISTER USER
router.post("/register", registerController)

module.exports=router;