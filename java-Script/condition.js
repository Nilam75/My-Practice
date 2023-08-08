//if=conditions are true it execute
let a = 20;
let b = 60;

if (a < b) {
    console.log('A is smaller than B');

}
//if-else= the two condition to ckeck the that time if-else used
//if condition false the currsor go on else .
if (a > b) {
    console.log("a is the small");
} else {
    console.log('B is big');
}
//if-else-if =there multiple condition requred(2-more)

let p = 70;
let q = 50;
if (p == q) {
    console.log('To enter VAlue  Same');
}
else if (p > q) {
    console.log('p is greter than q');
} 
else if (p < q) {
    console.log('p is small than q');

}
else {
    console.log('else blok');
}
//Switch;
let color = 'black1';

switch (color) {

    case 'blue':
        console.log('color is is blue');
        break;

    case 'black1':
            console.log('white');
            break;

    case 'white':
        console.log('white');
         break;

     case 'pink':
        console.log('white');
          break;

    default:
        console.log('no match');
       
}
//nested if : if inside if 

let x = 50;
let y = 180;

if(x < 100){
     if(x < y){
          if(y < 100){
             console.log(y);
          }
     }
}
