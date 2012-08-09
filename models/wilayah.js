var mongoose = require('mongoose')
   , Schema = mongoose.Schema
   , ObjectId = Schema.ObjectId;

var wilayahSchema = new Schema({
	kode: {type: String, max: 6, min: 2},
	nama: {type: String},
	author: {type: String, default: 'Anonim'},
	cdate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Wilayah', wilayahSchema);
