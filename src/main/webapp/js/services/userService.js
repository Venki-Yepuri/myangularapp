myAngularApp.factory('userService',
				[
						'$http',
						'$q',
						'$resource',
						'DataURLS',
						function($http, $q, $resource, DataURLS) {
							var headers = {
								"X-Requested-By" : "myAngularApp",
								"Pragma" : "no-cache",
								"Cache-Control" : "no-cache=set-cookie",
								"Expires" : "-1",
								"Accept" : "application/json",
								"Content-Type" : "application/json"
								//"Accept-Charset" : "utf-8"

							};
							var _getSingleUser = function(requestObject) {
								var deferred = $q.defer();
								var success = function(successResponse) {
									deferred.resolve(successResponse);
								};
								var error = function(errorResponse) {
									deferred.reject(errorResponse);
								};
								//resource(url, paramDefaults, actions)
								var singleUserService = $resource("rest/getUser",{}, {"getUser" : {method : "GET",headers : headers}});
								singleUserService["getUser"]({}, success,error);
								

								//same call with $http resource
								/*$http.get("rest/getUser/").success(
								function(data, headers) {
									deferred.resolve(data);
								}).error(function(data) {
									deferred.reject(data);
								});*/
								
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
								//resource(url, paramDefaults, actions)	
							    var multiUserService = $resource("rest/getUsers",{}, {"getUsers" : {method : "GET", headers : headers, isArray: true}});
							    multiUserService["getUsers"]({}, success,error);
								
							    //same call with $http
								/*$http.get("rest/getUsers/").success(
										function(data, headers) {
											deferred.resolve(data);
										}).error(function(data) {
											deferred.reject(data);
										});*/
								
								return deferred.promise;
							};
							
							var _saveUser = function(userData) {	 
								 var deferred = $q.defer();
								 var success = function(successResponse) {
										deferred.resolve(successResponse);
								 };
								 var error = function(errorResponse) {
										deferred.reject(errorResponse);
								 };
									
								//resource(url, paramDefaults, actions)
								var singleUserService = $resource("rest/saveUser",{}, {"saveUser" : {method : "POST", headers : headers}});
								singleUserService["saveUser"](userData, success,error);
									
								//same call with $http	
							    /*var userResponse = $http({
							        method: 'POST',
							        url: 'rest/saveUser',
							        contentType: "application/json",
							        data:$scope.userData
							    });
							    
							    userResponse.success(function(data, status, headers, config) {
							        $scope.list.push(data);
							        logger.info(angular.toJson(data));
							    });
							    userResponse.error(function(data, status, headers, config) {
							    	logger.info("Exception details: " + JSON.stringify({
							            data: $scope.userData //used formData model here
							        }));
							    });*/
							 
								return deferred.promise; 
							 };
							
							
							return {
								getSingleUser : _getSingleUser,
								getAllUsers : _getAllUsers,
								saveUser : _saveUser
							};
						} ]);