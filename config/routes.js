geniusApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/register');

    $stateProvider.state('invites', {
            url: '/invites',
            templateUrl: 'views/invites.html',
            controller: 'inviteController'
        })
        .state('consumption', {
            url: '/consumption',
            templateUrl: 'views/consumption.html',
            controller: 'consumptionController'
        })
        .state('zelt', {
            url: '/zelt',
            templateUrl: 'views/zeltCard.html',
            controller: 'zeltController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })
        .state('buy', {
            url: '/buy',
            templateUrl: 'views/buy.html',
            controller: 'buyController'
        })
        .state('show', {
            url: '/show',
            templateUrl: 'views/show.html',
            controller: 'showController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        .state('newPassword', {
            url: '/newPassword',
            templateUrl: 'views/password.html',
            controller: 'registerController'
        })
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller: 'registerController'
        })

});