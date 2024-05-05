const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^\S+@\S+\.\S+$/,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    id_no: {
        // New field to store the user ID
        type: mongoose.Schema.Types.ObjectId,
    },
});

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel 