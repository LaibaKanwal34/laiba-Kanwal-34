

console.log('Hello')

//var b = 'Something'
//console.log(b)

//var someNumber = 45
//console.log(someNumber)

//document.getElementById('sometext').innerHTML = 'Hey there'

//var age = prompt('Your age : ')
//document.getElementById('sometext').innerHTML = age

// Task 1: Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 

/*var numArray = []

arraySize = prompt('Enter the size of array: ')

for(var i=0; i<arraySize; i++){
    numArray[i] = prompt('Enter element no: ' +(i+1)+ ": ")
}

console.log(numArray)

position = prompt('Enter index and find the number: ')
for(j = numArray.length - 1; j>=0; j--){
    console.log(numArray[position])
}*/

// Task 2: Write program to find sum of all digits.

var array = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);
