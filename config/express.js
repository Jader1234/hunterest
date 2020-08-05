var express = require('express');
var home = require('./src/app/app-routing.module.ts');
module.exports = function(){
	var app = express();
	//Mudança no parâmetro PORT para publicar no Heroku
	app.set('port', process.env.PORT);
	//Middleware
	app.set('view engine', 'ejs');
	app.set('views', './src/app/app.component.html');
	home(app);
	return app;
};