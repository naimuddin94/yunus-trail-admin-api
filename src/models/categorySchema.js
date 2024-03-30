const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

// Define unique indexes
categorySchema.index({ name: 1 }, { unique: true });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
