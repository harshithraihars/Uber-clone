const mongoose = require('mongoose');
// it will store the token in the database and will expire after 24 hours
// so that the user will be logged out after 24 hours
// this is used to blacklist the token
const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});
const BlackListToken = mongoose.model('BlackListToken', blackListTokenSchema);

module.exports = BlackListToken;