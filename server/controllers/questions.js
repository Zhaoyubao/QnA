let Question = require('../models/question');

module.exports = {
    index(req, res) {
        Question.find().sort('-_id').exec( (err, questions) => {
            if(err)  console.log(`Error while getting all questions: ${err}`);
            else  res.json(questions);
        })
    },
    create(req, res) {
        Question.create(req.body, (err, question) => {
            if(err)  console.log(`Error adding question: ${err}`);
            else  res.json(question);
        })
    },
    show(req, res) {
        Question.findById(req.params.id).populate('_answers').exec( (err, question) => {
            if(err)  console.log(`Error getting a question: ${err}`);
            else  res.json(question);
        })
    }
}
