var http = require('http');
var app = require('./src/config/express')();
const PORT = process.env.PORT || 3000
http.createServer(app).listen(PORT), function(){
    console.log('Express Server escutando na portaa ' + app.get('port'));
};