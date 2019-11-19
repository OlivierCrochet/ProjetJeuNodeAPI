//Appel du module express
const express = require('express');
const Cors = require("cors");

//Appel du module bodyParser
const bodyParser = require('body-parser');

//Appel des constantes afin de créer les requêtes get, put, getbyid, delete et put
const { userPost, userGet, userDelete, userGetbyId, userPut } = require('./routes/userRoutes')
const app = express();
app.use(Cors());
app.use(bodyParser.json());

//Création des requêtes pour tout les modules avec express
app.post('/user', userPost);
app.get('/user', userGet);
app.delete('/user/:id', userDelete);
app.get('/user/:id', userGetbyId);
app.put('/user/:id', userPut);


//Export de express et de toutes les routes
module.exports = { app };
