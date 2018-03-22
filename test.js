var myObject = {
  value: 0,
  increment: function(int){
    this.value +=typeof inc === 'number' ? inc:1;
  }
};

function recursive(n){
  if(n ===0){
    return 1;
  }else{
    return n * recursive(n-1);
  }
}
recursive(3)

var result = '';
var i = 0;
do{
  i = i + 1;
  result = result + i;
} while(i<5);

console.log(result);
// expected result: "12345"

var str = '';
var object1 = {a: 1, b: 2, c: 3};
for(let pro in obj){
  str = str + obj[pro];
}
console.log(string1);
// expected output: "123"

