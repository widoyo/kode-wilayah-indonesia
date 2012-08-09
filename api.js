var Wilayah = require('./models/wilayah');

exports.list = function(req, res) {
	Wilayah.find(function(err, wilayahs) {
			res.send(wilayahs);
	});
}
