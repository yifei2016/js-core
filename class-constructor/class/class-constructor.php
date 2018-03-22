<?php
// class Car {
//   // public function __construct() {
//   //   $this -> model = 'Volvo';
//   // }
//   public function __construct($model){
//     $this -> model = $model;
//   }
//   public function printModelName(){
//     echo $this->model . "\n";
//   }
// }
//
// $obj = new Car('Volvo');
// $obj2 = new Car('Farrari');
//
// echo "\n";
// echo 'obj model is: ' . $obj->model . "\n";
// echo 'obj2 model is: ' . $obj2->model . "\n";
// $obj->printModelName();

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x, $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
?>
