const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Animal", animalSchema);


