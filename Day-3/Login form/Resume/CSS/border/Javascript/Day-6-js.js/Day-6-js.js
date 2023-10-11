// Q Find the numbers who odd and event.
var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61]
// console.log(numbers)

function findSumAndEven(array) {
    // console.log(array)

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} this number is even.`)
        } else {
            console.log(`${array[i]} this number is odd.`)
        }
    }
}
findSumAndEven(numbers)


// Q Find the count of numbers who odd and even.
var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61, 22, 77]
// console.log(numbers)

function findSumAndEven(array) {
    // console.log(array)
    var oddCount = 0;
    var evenCount = 0;

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(oddCount, "-oddcount")
    console.log(evenCount, "-evenCount")
}
findSumAndEven(numbers)


var array = [5, 3, 7, 8, 4, 2, 56, 9, 6, 4, 24, 6, 7, 2, 4, 8]
var target = 10;

for (var i = 0; i < array.length - 1; i++) {
    // console.log(array[i], "i")
    for (var j = i + 1; j < array.length; j++) {
        // console.log(array[j], "j", array[i], "i")
        if (array[i] + array[j] == target) {
            console.log(`${array[i]} + ${array[j]} = ${target}`)
        }
    }
}