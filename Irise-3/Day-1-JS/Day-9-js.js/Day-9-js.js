var names = ["rahul", "aakash", , "abc", "suraj", "kaveri"];
names.sort();
console.log(names)

var numbers = [23, 34, 56, 76, 98, 12, 43, 100000]
numbers.sort();
console.log(numbers)

var numbers2 = [23, 34, 56, 76, 98, 12, 43, 100000];

numbers2.sort((a, b) => b - a);
console.log(numbers2)
numbers2.sort((a, b) => a - b);
console.log(numbers2)
