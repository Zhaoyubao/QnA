app.controller('loginCtrl', ['$scope', '$location', '$cookies', 'qnaFactory', function($scope, $location, $cookies, QF) {
    if($cookies.get('user'))  $location.url('/main');

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            QF.login({name: $scope.user.name.toLowerCase()})
                .then( (res) => {
                    $cookies.put('user', res.data.name);
                    $location.url('/main');
                })
                .catch( (err) => console.log(`Error: ${err}`) )
        }
    }

}])
