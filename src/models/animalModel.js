const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema({
    name: {
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
        default: true,
    },
});
module.exports = Router;


