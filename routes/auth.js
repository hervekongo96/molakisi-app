const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/register', authController.register);
router.post('/registerTuteur', authController.registerTuteur);
router.post('/login', authController.login);
router.post('/loginTuteur', authController.loginTuteur);
router.post('/saving', authController.saving);
router.post('/submits', authController.submits);



 
module.exports = router;
