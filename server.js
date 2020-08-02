const express = require('express');
const path = require('path');
const app = express();
__dirname = path.resolve(path.dirname(''));

app.use(express.static(__dirname +'/dist/hunterest'));

app.get('/', function(req,res) {
    res.sendFile(path.join('/hunterest/src/app/app.component.html'));
});

app.listen(process.env.PORT || 8080);