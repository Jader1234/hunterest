var http = require('http');
var app = require('./config/express')();
const PORT = process.env.PORT || 5000
http.createServer(app).listen(PORT), function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
};
