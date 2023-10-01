const mongoose = require('mongoose')
const CitySchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    willayaId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'willaya'
    },
    date: {
        type:Date,
        default: Date.now
    },
});

module.exports = City = mongoose.model('city', CitySchema);