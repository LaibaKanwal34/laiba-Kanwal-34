/*
    Add an element to the end of below array and add one at the start
    of the array
*/

let arr = ['a', 'b', 'c', 'd'];

// Add element to the end
arr.push('e')

// add element to the start
arr.unshift('first_element')


function uniqueArray2(arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

