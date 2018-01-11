angular.module("app").directive("zwXq",function(){
	return {
		restrict:"A",
		replace:true,
		templateUrl:"../view/template/zwxq/zwxq.html"
	}
}).directive("zwXqjs",function(){
	return {
		restrict:"A",
		replace:true,
		templateUrl:"../view/template/zwxq/xqjs.html"
	}
}).directive("zwDl",function(){
	return{
		restrict:"A",
		replace:true,
		templateUrl:"../view/template/zwxq/xqdl.html"
		
	}
});