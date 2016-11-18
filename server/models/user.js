const db = require('mongoose'),
    UserSchema = new db.Schema({
        name: {type: String, unique: true, required: true}
    }, {timestamps: true});

module.exports = db.model('User', UserSchema);
