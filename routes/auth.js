const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/register', authController.register);
router.post('/register_p', authController.register);
router.post('/login', authController.login);
router.post('/login_p', authController.login_p);
router.post('/saving', authController.saving);



 
module.exports = router;
