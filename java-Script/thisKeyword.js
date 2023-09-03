//callback Function: it meanse the function pass as parameter of other function that called callback Function
//it redused significat amount of time
function addition( a,b,sus){
    let result=a+b;
return  console.log('addition and subtraction',result,sus);
}
function subtraction(sub){
    return sub=50-20;
   

}
console.log(addition(80,70,subtraction));


//In JavaScript, the this keyword refers to an object.
let carDetails5 = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true,
    dis: function (){
        return this.price;
    }
}
console.log(carDetails5.dis());

function test(){
    test2()
}

function test2(){
    console.log('test2....');
}

console.log(test());  //cascading calling function

// The "this" keyword is used in JavaScript to refer to the current object or context in which the code is being executed.
// Here are a few ways in which the "this" keyword is commonly used in JavaScript:
// Inside a method of an object - When used within a method of an object, "this" refers to the object itself. It allows accessing the object's properties and methods from within the method.
// Function invocation - When a function is invoked in a normal function invocation pattern (not as a method of an object), "this" by default refers to the global object (e.g., the window object in a browser or the global object in Node.js).
// Constructor functions - When used inside a constructor function, "this" refers to the object being created by that constructor. It allows setting properties and invoking methods specific to the newly created object.
// Callback functions - When a function is used as a callback function, the value of "this" inside the callback function depends on how the function is invoked. It can vary based on the context in which the callback function is called.
// Note: It's important to understand that the value of "this" is not determined by where the function is defined but rather by how the function is invoked.

//callBackfunction : in function we can pass another func as a parameter

//  whith function of remove the duplicate Functions
let word='MAharastra Pune ';
//to convert the all string uperCase
let originalWord=word.toUpperCase();
console.log("to Uper case:",originalWord);
let removeDup='';
for(let i=0;i<originalWord.length;i++){
    let char=originalWord[i];
    if(!removeDup.includes(char))
        removeDup+=char
}
console.log("remove dublicate:",removeDup);