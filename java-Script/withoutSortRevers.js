//let listArry = [1, 50, 78, 5, 7,60,0,3,8];
let listArry=['mango','orange','apple']
let temp;
//we want the sort items without using sort() method
for (let i = 0; i < listArry.length; i++) {
    for (let j = i; j < listArry.length; j++) {
        if (listArry[i] > listArry[j]) {
            temp = listArry[i];
            listArry[i] = listArry[j];
            listArry[j] = temp;
        }
    }
}
console.log('Sort Array:',listArry);
//reverse 
var array = [1, 2, 3, 4, 5];
function reverseArray(arr) {
    var start = 0;
    var end = arr.length - 1;
  
    while (start < end) {
      // Swap elements at start and end indices
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      // Move start and end indices
      start++;
      end--;
    }
  
    return arr;
  }
  
  console.log('reverse array:',reverseArray(array)); // Output: [5, 4, 3, 2, 1]
