const app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config( ($routeProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: '_login.html',
            controller: 'loginCtrl'
        })
        .when('/main', {
            templateUrl: '_main.html',
            controller: 'mainCtrl'
        })
        .when('/question', {
            templateUrl: '_question.html',
            controller: 'questionCtrl'
        })
        .when('/question/:id', {
            templateUrl: '_showQuestion.html',
            controller: 'questionCtrl'
        })
        .when('/answer/:questionId', {
            templateUrl: '_answer.html',
            controller: 'answerCtrl'
        })
        .otherwise('/login')
})
