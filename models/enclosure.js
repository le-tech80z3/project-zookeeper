const mongoose = require('mongoose')

const enclosureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    keeper: { type: mongoose.Schema.Types.ObjectId, ref: 'Keeper' },
    lastChecked: Date,
    animals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const Enclosure = mongoose.model('Enclosure', enclosureSchema)

module.exports = Enclosure