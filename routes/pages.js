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


router.get('/register', (req, res)=>{
    res.render('register');
});

router.get('/register_p', (req, res)=>{
    res.render('register_p');
}); 

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/login_p', (req, res) =>{
    res.render('login_p')
})

router.get('/save/auth/', (req, res) =>{
    res.render('saving')
})





module.exports = router;

