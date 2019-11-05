//Appel du module express
const express = require('express');
const Cors = require("cors");

//Appel du module bodyParser
const bodyParser = require('body-parser');

//Appel des constantes afin de créer les requêtes get, put, getbyid, delete et put
const { devicePost, deviceGet, deviceDelete, deviceGetbyId, devicePut } = require('./routes/deviceRoutes')
const { roomPost, roomGet, roomDelete, roomGetbyId, roomPut } = require('./routes/roomRoutes')
const app = express();


//Export de express et de toutes les routes
module.exports = { app };
