var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
//Parametros son: nombre del modelo, schema, nombre de la coleccion
var User = mongoose.model('User2', schema, 'users2');

var user = new User({
	name: 'John Smith',
	email: 'john@smith.io'
});

user.save(error=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("Guardado");
	process.exit(0);
});