var express = require('express');
var router = express.Router();

// route for tutor
router.get('/index', (req, res)=>{
    res.render('./devenir_tutors/index');
});
router.get('/auth/devenir_tutors/tutors_postuler', (req, res)=>{
    res.render('./devenir_tutors/tutors_postuler');
});

//End tutors informations 

// index home
router.get('/molakisi', (req, res)=>{
    res.render('index');
});

router.get('/home', (req, res)=>{
    res.render('home')
})
 
router.get('/tutors_devenir', (req, res)=>{
    res.render('tutors_devenir')
})
 
router.get('/trouver_tutors', (req, res)=>{
    res.render('trouver_tutors')
})   

router.get('/tutors_postuler', (req, res)=>{
    res.render('tutors_postuler')
})   


  
module.exports = router;

