geniusApp.controller('profileController', function($scope, $state, $compile) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');
    $scope.id = localStorage.getItem('patronId');
    
    
});