var app = require('express').createServer(),
	mongoose = require('mongoose'),
	api = require('./api');

mongoose.connect('mongodb://localhost/example')

app.get('/', function(req, res) {
    res.send('Hello from <a href="http://appfog.com">AppFog.com</a>');
});

app.get('/api/wilayah', api.list);

app.listen(process.env.VCAP_APP_PORT || 3000);
