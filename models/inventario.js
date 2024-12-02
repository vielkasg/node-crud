const mongoose = require('mongoose')

const inventarioSchema = new mongoose.Schema({
    codigo: {
        type: int,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    cantidad: {
        type: int,
        required: true
    },

    precio: {
        type: int,
        required: true
    },

    created: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const inventario = mongoose.model('inventario', inventarioSchema)

module.exports = inventario