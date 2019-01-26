const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = new mongoose.Schema({
    code: { type: String, required: true },
    userid: String,
    views: String
});

Schema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Posts', Schema);
