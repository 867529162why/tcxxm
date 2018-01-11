'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("search1",{
    	url:"/search1",
    	templateUrl:"view/search1.html"
    }).state('ym1', {
        url: '/ym1',
        templateUrl: 'view/ym1.html'
    }).state("dzzw",{
    	url:"/dzzw",
    	templateUrl:"view/dzzw.html"
    }).state("qdl",{
    	url:"/qdl",
    	templateUrl:"view/qdl.html"
    }).state("ydl",{
    	url:"/ydl",
    	templateUrl:"view/ydl.html"
    }).state("tdjl",{
    	url:"/tdjl",
    	templateUrl:"view/tdjl.html"
    }).state("zcsj",{
    	url:"/zcsj",
    	templateUrl:"view/zcsj.html"
    }).state("wdsc",{
    	url:"/wdsc",
    	templateUrl:"view/wdsc.html"
    }).state("zwxq",{
    	url:"/zwxq",
    	templateUrl:"view/zwxq.html"
    }).state("gszw",{
    	url:"/gszw",
    	templateUrl:"view/gszw.html"
    });
    $urlRouterProvider.otherwise('dzzw');
}]);
