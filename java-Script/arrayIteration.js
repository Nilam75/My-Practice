// forEach()
let cars = ['i10', 'i20', 'swift', 'jauar', 'audi'];
let newCar = [];
for (let i = 0; i < cars.length; i++) {
    newCar.push(cars[i]);
}
console.log(':New array copy', newCar);
//used forEach()
//syntax: forEach(item=>)
let newCar1 = [];
cars.forEach(item => {
    newCar1.push(item)
})
console.log('to used forEach', newCar1);
//to serd sperad operator
let spredCAr = [...cars];
console.log('using spred opratos:', spredCAr);

//to push the items in other array withot presence of swift
let aCars = ['i10', 'i20', 'swift', 'jauar', 'audi'];

let indexOfSwift = aCars.indexOf('swift');
console.log('index of Swift:', indexOfSwift);
delete aCars[indexOfSwift];
//aCars.slice(indexOfSwift,aCars.length);
console.log('without swift:', aCars);
let pushArry = [];
// let fixtoPush=[];
for (let i = 0; i < aCars.length; i++) {
  pushArry.push(aCars[i]);
}
console.log('Whitout swiftdddd:',pushArry);
let newCar2 = [];
aCars.forEach(item,index=> {
    if (index!==Math.floor(aCars.length/2)){
        newCar1.push(item);
    }
   
})
console.log('using foEach:',newCar1);