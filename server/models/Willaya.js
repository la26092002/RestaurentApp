const mongoose = require('mongoose')
const WillayaSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    countryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'country'
    },
    date: {
        type:Date,
        default: Date.now
    },
});

module.exports = Willaya = mongoose.model('willaya', WillayaSchema);