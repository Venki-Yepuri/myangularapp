/* There are several ways to declare angularjs service within application. Following are two simple ways:*/
/*http://viralpatel.net/blogs/angularjs-service-factory-tutorial/*/

myAngularApp.factory('userService',
		[
				'$http',
				'$q',
				'$resource',
				'DataURLS',
				function($http, $q, $resource, DataURLS) {

					var _getSingleUser = function(requestObject) {
						var deferred = $q.defer();

						var success = function(successResponse) {
							deferred.resolve(successResponse);
						};

						var error = function(errorResponse) {
							deferred.reject(errorResponse);
						};

						$resource(DataURLS.getSingleUser.stubUri).get({},
								success, error);
						return deferred.promise;
					};

					var _getAllUsers = function(requestObject) {
						var deferred = $q.defer();

						var success = function(successResponse) {
							deferred.resolve(successResponse);
						};
						var error = function(errorResponse) {
							deferred.reject(errorResponse);
						};
						
						$resource(DataURLS.getAllUsers.stubUri).get({},
								success, error);
						return deferred.promise;
					};
					return {
						getSingleUser : _getSingleUser,
						getAllUsers : _getAllUsers
					};
				} ]);