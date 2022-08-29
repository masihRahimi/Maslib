var mongoose = require('mongoose');


var Booksschema = mongoose.Schema({

    author:{
        type: String
    },
    year:{
        type: Number
    },
    story:{
        type: String
    },


});

var Booksmodel = mongoose.model('Books', Booksschema);
module.exports = Booksmodel; 