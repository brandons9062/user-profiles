const express = require('express');
//npm install express
const bodyParser = require('body-parser');
//npm install body-parser
const session = require('express-session');
//npm install express-session
const cors = require('cors');
const config = require('./config');
const userCtrl = require('./controllers/userCtrl');
const profileCtrl = require('./controllers/profileCtrl');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

//initialize session
app.use(session({
    secret: config.sessionSecret,
    resave:false,
    saveUninitialized:false    
}));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);



app.listen(3000, ()=>console.log('Listening on 3000'));