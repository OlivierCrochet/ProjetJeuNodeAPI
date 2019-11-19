// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Création d'un modèle dans la base de donnée
var userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    personnage: {
        type: String,
        required: false
    },
    progression: {
        type: String,
        default: '0'
    }
});


const User = mongoose.model('user', userSchema);

// Exportation d'un modèle
module.exports = { User };
