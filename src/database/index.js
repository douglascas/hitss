const mongoose = require('mongoose');

//Criando conexão com o MongoDB
mongoose.connect('mongodb://localhost/noderest', { promiseLibrary: global.Promise });
mongoose.Promise = global.Promise;

module.exports = mongoose;