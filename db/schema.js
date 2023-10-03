const mongoose = require('mongoose');
var contactSchema = new mongoose.Schema(
    {
    username:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    message:{
        type: String
    }
}
)
module.exports = {contactSchema};