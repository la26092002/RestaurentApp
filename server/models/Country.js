const mongoose = require('mongoose')
const CoutrySchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    date: {
        type:Date,
        default: Date.now
    },
});

module.exports = Country = mongoose.model('country', CoutrySchema);