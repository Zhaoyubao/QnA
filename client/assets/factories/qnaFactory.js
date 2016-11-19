app.factory('qnaFactory', ['$http', function($http){
    let factory = {};

    factory.login = function(user) {
        return $http.post('/users', user);
    }
// ===============================================
    factory.getQuestion = function(id) {
        return $http.get(`/questions/${id}`);
    }
    factory.getQuestions = function() {
        return $http.get('/questions');
    }
    factory.addQuestion = function(question) {
        return $http.post('/questions', question);
    }
// ==============================================
    factory.addAnswer = function(answer, id) {
        return $http.post(`/answers/${id}`, answer);
    }
    factory.updateLikes = function(id) {
        return $http.get(`/answers/${id}`);
    }

    return factory;
}])
