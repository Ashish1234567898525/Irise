const Students = ['shrikant', 'sahil', ];

const count = Students.push('sahil');
console.log(count);
// Expected output: 3
console.log(Students);
// Expected output: Array ["akshay", "sahil", "shrikant"]

Students.push('akshay', 'sahil', 'shrikant');
console.log(Students);
// Expected output: Array ["divya", "akshay", "sahil", "aniket", "bhagesh", "shrikant"]

// pop

const Fruits = ['orange', 'banana', 'strawberry', 'waterlemon', 'apple'];

console.log(Fruits.pop());
// Expected output: "apple"

console.log(Fruits);
// // Expected output: Array ["apple", "banana", "strawberry"]

Fruits.pop();
Fruits.pop();

console.log(Fruits);
// Expected output: Array ["apple", "banana", "strawberry"]


//shift 
const array1 = [1, 2, 3];
array1.shift()
array1.shift()
array1.shift()
console.log(array1)

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 2


// unshift 


var array3 = [1,2,3,4]
array3.unshift(5)
array3.unshift(6)
array3.unshift(7,8)
console.log(array3)


// map()

var numbers = [1, 2, 3, 4]

// function myFunc (){}
// const myFunction = () => { }
//   () => 

// for (var i = 0; i < numbers.length; i++) { }

var multiByTwo = numbers.map((i) => i * 2)
var additionByTwo = numbers.map((i) => i + 2)
console.log(multiByTwo, "multiByTwo")
console.log(additionByTwo, "additionByTwo")


