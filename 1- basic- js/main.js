
var name = "Jisan";
//console.log(name);

var num = 45;
//console.log(num)

//Manipulate DOM with Javascript

//var age = prompt("What is your age:")

//document.getElementById('para1').innerHTML= age;

//Numbers in javascript

var num1 = 10;

//increment num1 by 1
num1++;

//decrement num1 by 1
num1--;
console.log(num1);

//Divide /, Multiply *, remainder %;
console.log(num1 % 6)

//Increment/Decrement by any number
/*num1 += 10;
console.log(num1);

num1 -= 10;
console.log(num1)

*/

/*Function
1. Create a function
2. Call a function
*/

//create
function fun() {
    console.log("This is funtion ");
}
//call
fun();

/* Lets create a function that take in a name and says hello followed by you name

For example

name: "Jisan"
Return: "Hello Jisan"
*/

function greeting (userName) {
    var result = 'Hello' + ' ' + userName; //String Concatenation
    console.log(result);
}
//var name = prompt("What is your name?: ");
//greeting(name);

//How do arguments work in function?
//how to add 2 numbers together in a funtion?

function sumNumbers(a, b){
    var result = a + b;
    console.log(result);
}

//sumNumbers(10, 20);


//Loops

/*while loops

var n = 0;

while( n < 100){
    n += 1;
    console.log(n);
}
*/

/* For loop


for(let n = 0; n <= 100; n++){
    console.log(n);
}

*/


//Data Types
let yourAge = 18 //number
let yourName = 'Jisan' //string
let isStudent = true; // Boolean
let nameObj = {first: 'Jisan', last: 'Mia'}//Object

let groceries = ['apple', 'banana', 'orange'] // Array

let random; //undefined
let nothing = null //value null


/*
//Strings in Javascript (common method)

let fruit = 'banana';
let fruit1 = 'banana,is,my,fruit'
let moreFruit = 'banana\napple'; // new line(\n)

console.log(fruit.length)
console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2, 6))
console.log(fruit.replace('ban', 'oan'))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit.concat(" wow"))
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit1.split(','))//split by a coma
console.log(fruit.split(''))//split by a coma

*/


//Arrays in Javascript
/*
let fruits = ['banana', 'apple', 'orange', 'pineappel'];
fruits = new Array ('banana', 'apple', 'orange', 'pineappel');

console.log(fruits[2]) //access value at index 2nd

fruits[0] = 'peara';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string ',fruits.toString())
console.log(fruits.join(' * '));
console.log( fruits.pop(), fruits) //removes last item
console.log(fruits.push('bluakberries'), fruits) //appends 
fruits[fruits.length] = 'new fruit'
console.log(fruits)
fruits.shift();//removes first element from a array
console.log(fruits)
fruits.unshift('kiwi');//add first element to an array
console.log(fruits)

let vagetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vagetables);
console.log(allGroceries)
console.log(allGroceries.slice(1, 4))
console.log(allGroceries.reverse())
console.log(allGroceries.sort())

let someNumbers =[5, 54, 7, 3, 10, 8, 1, 45, 265, 120];
console.log(someNumbers.sort(function(a,b){return a-b})) //sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})) //sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num ++){
    emptyArray.push(num);
}
console.log(emptyArray)


arry end*/


//Object in Javascript
//dictionaries in python
/*
let student = {
    first: 'Jisan', 
    last: 'Mia',
    age: 18,
    height: 65,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age; //this keyward is equvelent to self in python
    }
}
console.log(student);
//console.log(student.first);
//console.log(student.last);
//student.first = 'notJisan';
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo())

object end*/




/*
//Conditional, control flows (if, else)
// && AND
// || OR

//18-35 is my target
var age = 25;

if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);

}else{
    status = 'not my audience';
    console.log(status);
}



//Switch statements
//differentiate between weekday vs. weekend
//day 0 --> Sunday --> weekend
//day 1 --> Monday ---> weekday
//day 2 --> Tuesday --> weekday
//day 3 --> Wednesday --> weakday
//day 4 --> Thursday --weekday
//day 5 --> Friday  --> weekend
//day 6 --> Saturday --. weekend

var day = parseFloat(prompt("What is the day today(in 0-6): "))
switch (day){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text)

conditional statement end*/













































































