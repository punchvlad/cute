

var express = require('express');


var app = express();


require('./config')(app);


app.use(express.static('public'));

//this was my test routes to link images o a page

// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);


//require('./upload')(app);


app.listen(8080);
console.log('Your application is running on http://localhost:8080');
