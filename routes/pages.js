var express = require('express');
var router = express.Router();


router.get('/index', (req, res)=>{
    res.render('index');
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

