let Question = require('../models/question');
let Answer = require('../models/answer');

module.exports = {
    create(req, res) {
        Answer.create(req.body, (err, answer) => {
            if(err)  console.log(`Error adding answer: ${err}`);
            else {
                Question.update({_id: req.params.questionId}, {$push: {"_answers": answer}}, (err) => {
                    if(err)  console.log(`Error while updating question: ${err}`);
                    else  res.json(true);
                })
            }
        })
    },
    getOne(req, res) {
        Answer.findById(req.params.answerId).exec( (err, answer) =>{
            if(err)  console.log(`Error getting an answer: ${err}`);
            else {
                answer.likes += 1;
                answer.save( (err) => {
                    if(err)  console.log(`Error Updating an answer: ${err}`);
                    else  res.json(true);
                })
            }
        })
    }
}
