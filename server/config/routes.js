let users = require('../controllers/users'),
    questions = require('../controllers/questions'),
    answers = require('../controllers/answers');

module.exports = (app) => {
    app.post('/users', users.login);

    app.get('/questions', questions.index);
    app.post('/questions', questions.create);
    app.get('/questions/:id', questions.show);

    app.post('/answers/:questionId', answers.create);
    app.get('/answers/:answerId', answers.getOne);
}
