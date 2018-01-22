var f = (function(x){
	var a = x * 2;
	return function(y){
		return a * y;
	}
})(4)
//closure func, local variable can live longer even func end.
f(8);


//after test run, a can not be accessed
function test(){
	var a =1;
	console.log(a);
}
test();
