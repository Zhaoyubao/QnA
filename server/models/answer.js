const db = require('mongoose'),
    AnswerSchema = new db.Schema({
        answer: {type: String, required: true, minlength: 5},
        user: {type: String, required: true},
        likes: {type: Number, default: 0},
        details: String
    }, {timestamps: true});

module.exports = db.model('Answer', AnswerSchema);
