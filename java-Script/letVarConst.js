//Scope level difereance:1.function lavel and 2.block level 
console.log('....................first scope level............');
function add(){
   //let a=20;
   var c=30
   //const name='nilam'
  
    if(a=20){
        //let c=40;
        const name='nilam';
        let b=30;
        console.log('const is block scope:',name);//const also block csope inside block use that varialble  inside out side it killed
        //console.log('print c',c);//var ru on also block scope
      
        console.log('let is block scope:',b);//hear let are block level  that way it must be declared in if Block
    }
    console.log('function scope:anywear use inside the function:',c);//var is the function scope:in the function any where it work.
   // console.log('print NAme',name);
    // console.log('print b',b);//hear b can not work bez let key word are block level out of block it is kill
}
add();

console.log('..................hoisting...............................');
//hoisting means define first value and then declaration
//sureName='More';
//let sureName;
//console.log("surname",sureName);
//name='nilam';
//const name;
console.log('the let and var keyword not possible hoistiog');
sureName='More';
var sureName;
console.log("surname:::",sureName);
console.log('the let key word  possible hoistiog');

console.log('.........reassigning..........');
function reassining(){
    let name='nilam';
    name='vaibhav';
}