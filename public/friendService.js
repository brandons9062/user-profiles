angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      /* FIX ME */
        console.log(user);
        return $http.post('/api/login', user);
    };

    this.getFriends = function() {
    	/* FIX ME */
        return $http.get('/api/profiles');
    };
  
});
