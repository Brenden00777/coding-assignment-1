


//1
let ages = [3,9,23,64,2,8,28,93]
//a
console.log(ages[ages.length - 1] - ages[ages.length - ages.length])
ages.push(72);
console.log(ages[ages.length - 1] - ages[ages.length - ages.length])
var totalAges = 0
//b
for (i = 0; i < ages.length; i++){
    totalAges += ages[i];
}
let avg = totalAges / ages.length;
console.log(avg);
//2
var totalLetters = 0
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
for (i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
let avgLetters = totalLetters / names.length;
console.log(avgLetters);
//b
console.log(names.join(', '));
//3
console.log(ages[8]);
//4
console.log(ages[0]);
//5
let nameLengths = [];


//7
function function1(string, n){
    (string.repeat(n));
return string;
}
//8 

function fullName( firstName, lastName){
return (firstName + lastName);
}
console.log(fullName);
//9


let array1 = [1, 2, 3]
function arraySum(array1){
var total = 0;
for(var i in array1){
    total += array1[i];
}
return total;
}

//10
function avgNumInArray()



