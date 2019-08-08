// Define a Class/Constructor Hamster
// When create an instance of Hamster,it requires two paramters -> name, age
function Hamster(name, age) {
  this.name = name;
  this.age = age;
}

Hamster.prototype.growOlder = function() {
  this.age++;
}

function ageHamsters(list) {
  list.forEach(hamster => {
    hamster.growOlder();
  });
  
  let newList = list.filter(hamster => hamster.age < 5);
  return newList;
}


let h1 = new Hamster("Bla", 2);
let h2 = new Hamster('Yifei', 3);

let hamsters = [];
hamsters.push(h1);
hamsters.push(h2);


var result = ageHamsters(hamsters);
console.log(result);

//in es5, constructor seems like class, no class and constructor directives, in es6, there are.
