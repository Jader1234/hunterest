var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function(){
    var app = express();
    app.set('port', 3000);
    //Middleware
    app.use(express.static('./app.component.html'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.set(require('method-override')());
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
    return app;
};
