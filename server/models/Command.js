const mongoose = require('mongoose')
const CommandSchema = new mongoose.Schema({
    user: {
        type:String,
        require:true
    },
    data: {
        type:String,
        require:true
    },
    date: {
        type:Date,
        default: Date.now
    },
});

module.exports = Command = mongoose.model('command', CommandSchema);