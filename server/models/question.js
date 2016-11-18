const db = require('mongoose'),
    Schema = db.Schema,
    QuestionSchema = new Schema({
        question: {type: String, required: true, minlength: 10},
        description: String,
        _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
    }, {timestamps: true});

module.exports = db.model('Question', QuestionSchema);
