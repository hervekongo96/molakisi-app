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
router.get('/home/index', (req, res)=>{
    res.render('./home/index');
});

router.get('/trouver_tutors/index', (req, res)=>{
    res.render('./trouver_tutors/index')
})


router.get('/register', (req, res)=>{
    res.render('register');
});

router.get('/register_p', (req, res)=>{
    res.render('register_p'); 
}); 

router.get('/tutors_postuler', (req, res)=>{
    res.render('./devenir_tutors/tutors_postuler')
})





module.exports = router;

