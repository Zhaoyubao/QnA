app.controller('questionCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'qnaFactory', function($scope, $routeParams, $location, $cookies, QF) {
    if(!$cookies.get('user'))  $location.url('/login');

    $scope.logout = function() {
        $cookies.remove('user');
        $location.url('/login');
    }

    function getQuestion() {
        QF.getQuestion($routeParams.id)
        .then( (res) => {
            $scope.question = res.data;
            $scope.answers = $scope.question._answers;
        })
        .catch( (err) => console.log(`Error: ${err}`) )
    }

    getQuestion();

    $scope.addLikes = function(answerId) {
        QF.updateLikes(answerId)
            .then( getQuestion )
            .catch( (err) => console.log(`Error: ${err}`) )
    }

    $scope.addQuestion = function() {
        if ($scope.qForm.$valid) {
            QF.addQuestion($scope.question)
                .then( (res) => {
                    $location.url('/main');
                })
                .catch( (err) => console.log(`Error: ${err}`) )
        }
    }

}])
