const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokens = require('./token')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    key: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


//open user compte
exports.register = (req, res) => {

    let { name, gmail, password, passwordconfirm } = req.body;

    db.query('SELECT gmail FROM user WHERE gmail = ?', [gmail], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'le compte existe'
            });
        } else if (password !== passwordconfirm) {
            return res.render('register', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO user SET ?', { name: name, gmail: gmail, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('register', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//open professor compte
exports.register_p = (req, res) => {
    console.log(req.body);

    var { name, gmail, password, passwordconfirm } = req.body;

    db.query('SELECT gmail FROM professor WHERE gmail = ?', [gmail], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register_p', {
                message: 'The compte exist'
            });
        } else if (password !== passwordconfirm) {
            return res.render('register_p', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO professor SET ?', { name: name, gmail: gmail, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('register_p', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//connexion user
exports.login = async (req, res) => {
    try {
        const { gmail, password } = req.body;

        if (!gmail || !password) {
            return res.status(400).render('login', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM user WHERE gmail=?', [gmail], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('login', {
                    message: 'Gmail ou mot de Passe incorect'
                });
            }
            else {
                const tokens = (tokens) =>{
                    return tokens 
                }
                tokens();
                res.status(200).redirect("/register");
            }
        });

    } catch (error) {
        console.log(error);
    }

};

//connexion professor
exports.login_p = async (req, res) => {
    try {
        const { gmail, password } = req.body;

        if (!gmail || !password) {
            return res.status(400).render('login_p', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM professor WHERE gmail=?', [gmail], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('login_p', {
                    message: 'Gmail ou mot de Passe incorect'
                });
            }
            else {
                const tokens = (tokens) =>{
                    return tokens
                }
                tokens();
                res.status(200).redirect("/register_p");
            }
        });

    } catch (error) {
        console.log(error);
    }

};


//save the professor
exports.saving = async (req, res) => {
    
}



