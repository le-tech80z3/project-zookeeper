const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body: String,
    urgent: Boolean
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment