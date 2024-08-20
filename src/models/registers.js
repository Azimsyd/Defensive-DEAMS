const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    femail: {
        type: String,
        required: true,
        unique: true
    },
    fphone: {
        type: Number,
        required: true,
        unique: true
    },
    fpass: {
        type: Number,
        required: true,
    },
    fcpass: {
        type: Number,
        required: true,
    }
})

// now we need to create collection

const Registeration = new mongoose.model('Registeration', employeeSchema);
module.exports=Registeration;