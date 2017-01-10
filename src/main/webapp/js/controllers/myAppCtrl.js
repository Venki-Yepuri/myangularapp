myAngularApp.controller('myAppCtrl', ['$scope','$log',
    'userService', function($scope,logger,
    userService) {
	  
	 $scope.user = {};
	 $scope.users = {};
	 $scope.userData = {};
	 
	 $scope.getSingleUser = function() {
				userService.getSingleUser().then(
						function(successResponse) {
							$scope.user = angular.toJson(successResponse);
							logger.info("myAppCtrl:: getSingleUser() -> "
									+ $scope.user);
						});
			};
	 $scope.getAllUsers = function() {
				userService.getAllUsers().then(
						function(successResponse) {
							$scope.users = angular.toJson(successResponse);
							logger.info("myAppCtrl:: getAllUsers() -> "
									+ $scope.users);
						});
			};
			
	 $scope.saveUser = function() {
		userService.saveUser($scope.userData).then(
				function(successResponse) {
					$scope.user = angular.toJson(successResponse);
					logger.info("myAppCtrl:: saveUser() -> "
							+ $scope.user);
				});
	 };
  
	  
	}]);