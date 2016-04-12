/*
// number variable
var num = 1;
// string variable
var string = "string";
// boolean variable
var boolean = true;
// arrays variable 
var arrays = [1, 3, 4];
// undefined variable
var undefined = undefined;
//debugging alert
alert("Hello!");
// debugging console print out
console.log("How are you?")
//if statement
if (kassim === true){
	return kassim;
};
// for loop
for (var i=0;i<10;i++){
	return i;
};
//while loop
while(i<0){
	return i;
	i++;
};
//funtion with no argument
function test(){

};
//funtion with argument
function newTest(x){

};
//object
var object = {color: "red", height:"6 cm"};

var z = 1;
function print_it(){   
console.log(z); };

var z = 3;
function some_f(){   
  var z = 20;   
  console.log(z); 
 } 
 some_f(); // return 20
 console.log(z); // return 3

var c = 10;
function hallo(){ 
  if(true){     
    var c = 2;
  }   
console.log(c);   
// returns 2, not the global value 10   
// implication: variables don't have a   
// separate scope within a block }
*/

function myName(x){
	return x;
};

function add(x, y){
	return x + y;
};

function div(x, y){
	return x / y;
};

var a = 4;
var b = 5;
console.log(a+b);

var x = "Hello";
var y = " World";
console.log(a+b);

var array = [['Kassim', 'Billy', 'Rick'],['Basketball', 'Baseball', 'Football']];
array[0][0] + " loves " + array[1][2] + "."

var q = 5
if ( q < 10){
 console.log("the variable is less than 10");
  } else {
   console.log("the variable is " + q + " and it is greater than 10");
 };

 ar q = 11
if ( q < 10){
 console.log("the variable is less than 10");
  } else {
   console.log("the variable is " + q + " and it is greater than 10");
 };

 var string = "Hello"
 if ( string = "Hello"){
  console.log("string stored in the variable is the same as Hello");
  } else {
   console.log("string stored in the variable is not the same as Hello");
  };

function giveName(entry){
  	return "Your name is " + entry;
};
giveName("Kassim");

function printout(){
  return "it worked!"
};
printout();

function door(x){
 if (x === 1){
  return "you won 1000$!";
 } else if (x === 2){
  return "you won 10.000$";
 } else if ( x == 3){
  return "you won 100.000.000 $";
 };
};
door(1);
door(2);
door(3);
