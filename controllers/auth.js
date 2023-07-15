const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokens = require('./token');
const load = require('express-fileupload')


const dotenv = require('dotenv');


dotenv.config({path:'./.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

//open tutor compte
exports.registerTuteur = (req, res) => {
    console.log(req.body);

    var { name, prenom, email, password, passwordconfirm } = req.body;

    db.query('SELECT email FROM tuteur WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('message', {
                message: 'The compte exist'
            });
        } else if (password !== passwordconfirm) {
            return res.render('mrssage', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO tuteur SET ?', { name: name, prenom:prenom, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('message', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//connexion tutor
exports.loginTuteur = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('message', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM tuteur WHERE email=?', [email], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('message', {
                    message: 'error email or password'
                });
            }
            else {
                const tokens = (tokens) =>{
                    return tokens
                }
                tokens();
                res.status(200).redirect('./devenir_tutors/tutors_postuler');
            }
        });

    } catch (error) {
        console.log(error);
    }

};

// submit infos tutor
exports.submits = (req, res)=>{
   
    const {
        nom, 
        postnom, 
        prenom, 
        sexe,
        email,
        phone,
        montant,
        file,
        anneExp,
        cours,
        ecole
    } = req.body;
//    if(req.files){
//     console.log(req.files)
//     let file = req.files.file
//    // let filename = file.name
//     console.log(file)

//     file.mv('./uploads'+filename, function (err){
//         if(err){
//             res.send(err)
//         }else{
//             res.send('File Upload ')
//         }
//     })
//    }
//    else{
//         return res.status(400).send('No cv were uploaded')
//     }

    // cv = req.cv.upload;
    // var cv_name = file.name

    // db.query('SELECT email FROM candidature WHERE email = ?', [email], async (error, results)=>{
    //     if(error){
    //         console.log(error)
    //     }
    //     if(results.length > 0){
    //         return res.render('message', {
    //             message : 'ce compte existe'
    //         })
    //     }
    // db.query('INSERT INTO candidature SET ?', {nom:nom, postnom:postnom, prenom:prenom, sexe:sexe, email:email, phone:phone, montant:montant, cv:cv, anneExp:anneExp, cours:cours, ecole:ecole }, (error, results)=>{
    //     if(error){
    //         console.log(error)
    //     }else{
    //         console.log(results)
    //         return res.render('message',{
    //             message: 'vous etes enregistrer'
    //         })
    //     }
    // })
    // })

    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let file= req.files.file;
            console.log(name)
            //Use the mv() method to place the file in the upload directory (i.e. "uploads")
            file.mv('./uploads/' + file.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            });
            console.log(data)
        }
    } catch (err) {
        res.status(500).send(err);
    }

}

//End tutor informations

//------------------------------------------------------------------------------------------

//connexion user

//open user compte
exports.registerUser = (req, res) => {
    console.log(req.body);

    var { name, prenom, email, password, passwordconfirm } = req.body;

    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('message', {
                message: 'The compte exist'
            });
        } else if (password !== passwordconfirm) {
            return res.render('mrssage', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO user SET ?', { name: name, prenom:prenom, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('message', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('message', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM user WHERE email=?', [email], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('message', {
                    message: 'error email or password'
                });
            }
            else {
                const tokens = (tokens) =>{
                    return tokens
                }
                tokens();
                res.status(200).redirect('./devenir_tutors/tutors_postuler');
            }
        });

    } catch (error) {
        console.log(error);
    }

};