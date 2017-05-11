angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
    $scope.currentUser = friendService.getFriends().then(function(response){
        return response.currentUser;
    }) ;
    
    $scope.friends = friendService.getFriends().then(function(response){
        return response.friends;
    }) ;;
});