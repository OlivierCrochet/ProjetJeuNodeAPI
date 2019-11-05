// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Création d'un modèle dans la base de donnée
const Device = mongoose.model('Device', {
    name: {
        type: String,
        require: true
    },
    state: {
        type: Boolean,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    room: {
        type: String,
        require: true
    },
    historique: {
        type: Array,
        require: true
    }
});

// Exportation d'un modèle
module.exports = { Device };