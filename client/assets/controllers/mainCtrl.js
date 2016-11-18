app.controller('mainCtrl', ['$scope', '$location', '$cookies', 'qnaFactory', function($scope, $location, $cookies, QF) {
    $scope.user = $cookies.get('user');
    if(!$scope.user)  $location.url('/login');

    $scope.logout = function() {
        $cookies.remove('user');
        $location.url('/login');
    }

    function getQuestions() {
        QF.getQuestions()
            .then( (res) => $scope.questions = res.data )
            .catch( (err) => console.log(`Error: ${err}`) )
    }
    getQuestions();

}])
