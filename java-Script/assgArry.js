function removeBetAry(){
    let cars=['i10','i20','swift','bmw','audi'];
let newCar=[];
let withou=cars.splice(2,1);
console.log('remove the element:',withou);
for(let i=0;i<cars.length;i++){
    newCar.push(cars[i])
}
console.log('New arry:',newCar);
let cars1=[];
cars.forEach(elementPush =>{
    cars1.push(elementPush);
})
console.log('Useing ForEach:',cars1);
}



// In Maharashtra to remove the duplicate alphabets in string 
function stringDuplicate(){
    let removeAlpha='maharastra';
console.log('origanal:',removeAlpha);
let result=removeAlpha.forEach(remove =>{
    if(remove!='a'){
        return remove;
    }
})

//let result=removeAlpha.split('a');
 console.log('the remove a:',result);

}
function sort() {
    // to sort the string:
//to covert arry in to string
let removeAlpha='maharastra';
let strigArray=removeAlpha.split('');
console.log('string in to array',strigArray);
let temp;
for(let i=0;i<strigArray.length;i++){
    for(let j=i;j<strigArray.length;j++){
        if(strigArray[i]>strigArray[j]){
            temp=strigArray[i];
            strigArray[i]=strigArray[j];
            strigArray[j]=temp;
        }
    }

}

console.log('Sordted String:',strigArray.toString());

}

//the reverse the string

let revrString='Maharastra';

//first to convert in to the array

let revseArray=revrString.split('');
console.log('The string in to array',revseArray);

// let start=0;
// let end=reverseArray.length-1;
let swap;
 function arry() {
     var start = 0;
    var end = reverseArray.length - 1;
    while (start < end) {
      // Swap elements at start and end indices
       swap = reverseArray[start];
       reverseArray[start] =reverseArray[end];
       reverseArray[end] = swap;
  
      // Move start and end indices
      start++;
      end--;
    }
  }
  
  console.log('reverse array:',reverseArray); 
  