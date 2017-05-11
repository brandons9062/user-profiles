//npm init -y
const express = require('express');
//npm install express
const bodyParser = require('body-parser');
//npm install body-parser
const session = require('express-session');
//npm install express-session
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
//initialize session
app.use(session({
    secret: "tiredofrunningtiredofhuntingmyownkindbutretiringnothing",
    resave:false,
    saveUninitialized:false    
}));


