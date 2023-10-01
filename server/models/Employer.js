const mongoose = require('mongoose')
const EmployerSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    phone: {
        type:String,
        require:true,
        unique:false
    },
    typeEmployer: {
        type:String,
        require:true
    },
    restoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'resto'
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

module.exports = Employer = mongoose.model('employer', EmployerSchema);