// Appel du module mongoose pour permettre la connexion à la bdd
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://<username>:<password>@cluster0-3n0v9.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
// Export du module mongoose
module.exports = { mongoose }