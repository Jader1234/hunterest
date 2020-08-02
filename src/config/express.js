var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function(){
    var app = express();
    app.set('port', 3000);
    //Middleware
    app.use(express.static('./app'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.set(require('method-override')());
    app.set('view engine', 'ejs');
    load('models', {cwd: 'app'}).then('app').into(app);
    return app;
};
