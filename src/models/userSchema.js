const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Admin', 'Moderator', 'Basic'],
        default: 'Basic',
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// eslint-disable-next-line func-names, consistent-return
userSchema.pre('save', async function (next) {
    try {
        // Check if the password is modified or this is a new user
        if (!this.isModified('password') || this.isNew) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(this.password, salt);
            this.password = hashPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Define unique indexes
userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
