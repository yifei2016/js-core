class Classtest { 
  constructor(age) { 
    this.age = age;
  }
  static get Name(){ 
    return 'yifei';
  }

  ageIncrease() { 
    this.age += 1;
    return this.age; 
  }
}
let classtest = new Classtest(1);
console.log(classtest.ageIncrease());
console.log(Classtest.Name);

module.exports = Classtest;
