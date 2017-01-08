/* There are several ways to declare angularjs service within application. Following are two simple ways:*/
/*http://viralpatel.net/blogs/angularjs-service-factory-tutorial/*/

myAngularApp
		.factory(
				'userService',
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
								
								/*$http.get("rest/getUsers/").success(
										function(data, headers) {
											deferred.resolve(data);
										}).error(function(data) {
											deferred.reject(data);
										});*/
								
								return deferred.promise;
							};
							return {
								getSingleUser : _getSingleUser,
								getAllUsers : _getAllUsers
							};
						} ]);