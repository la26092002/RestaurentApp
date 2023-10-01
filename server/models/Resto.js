const mongoose = require('mongoose')
const RestoSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    cityId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'city'
    },
    date: {
        type:Date,
        default: Date.now
    },
});

module.exports = Resto = mongoose.model('resto', RestoSchema);