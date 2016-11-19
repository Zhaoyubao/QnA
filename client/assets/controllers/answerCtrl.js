app.controller('answerCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'qnaFactory', function($scope, $routeParams, $location, $cookies, QF) {
    let user = $cookies.get('user');
    if(!user)  $location.url('/login');

    $scope.logout = function() {
        $cookies.remove('user');
        $location.url('/login');
    }

    QF.getQuestion($routeParams.questionId)
        .then( (res) => $scope.question = res.data )
        .catch( (err) => console.log(`Error: ${err}`) )

    $scope.addAnswer = function() {
        if ($scope.aForm.$valid) {
            let answer = $scope.answer;
            answer.user = user;
            QF.addAnswer(answer, $routeParams.questionId)
                .then( (res) => $location.url('/main') )
                .catch( (err) => console.log(`Error: ${err}`) )
        }
    }

}])
