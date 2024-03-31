const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    features: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    audio: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Customer model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
