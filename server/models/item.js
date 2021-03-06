const mongoose = require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    solid: {
        type: Boolean,
        default: true
    },
    owner: {
        type: String
    }
})

module.exports = mongoose.model('Item', itemSchema)