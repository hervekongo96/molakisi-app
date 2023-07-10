const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const db = require('./db/db')



dotenv.config({path:'./.env'})

const app = express()

//motor de templete
app.set('view engine', 'hbs')
const public = path.join(__dirname, './public');
app.use(express.static(public));

//parse url-encode bodies(as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());  

// The route
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

const connection = (db)=>{
    console.log(db)
}

// db connector
// const db = mysql.createConnection({  
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     key: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// })

// db.connect((error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("connexion établie avec succès!!!")
//     }
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`serveur allumer au port ${PORT}`);
})