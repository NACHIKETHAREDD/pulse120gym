const mongoose = require('mongoose');
const schema = require('./schema')
var Contact = mongoose.model('Contact',schema.contactSchema);
module.exports={Contact};