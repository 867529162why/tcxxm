"use strict";
angular.module("app").controller("mysearch1",function($scope,$http){
	$http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function(res){
		$scope.datalist=res.data;
		console.log($scope.datalist);
	});
});
