var mongoose = require('mongoose');


var Contactusschema = mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type: String
    },
    message:{
        type: String
    },


});

var Contactusmodel = mongoose.model('Contact', Contactusschema);
module.exports = Contactusmodel; 