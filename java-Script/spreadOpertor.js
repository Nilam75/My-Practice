//JavaScript spread operator (...)
//The JavaScript spread operator (...) allows us to quickly copy all 
//or part of an existing array or object into another array or object.
let flowers=['lily','mogara','chapha','maringlod'];
//coppy all
let flowers1=[...flowers];
console.log('flowers1',flowers1);
console.log('flowers1',flowers);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//part of
let [f1,f2,...f3]=flowers;
console.log('f1',f1);
console.log('f2',f2);
console.log('f3',f3);

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;::::::::::

//spread operator on obj: do not use on obj
let carDetails = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true,
    dis:656565
}
let  carDetails3 = { 
    carName : "mini cup",
    color: "white",
    price: 90000,
    tpermite: false,
    discount:20000
}
let carDetail2 = {...carDetails};
console.log(carDetail2);

let car4 = {...carDetails, ...carDetails3};

console.log(car4);

//it not used in object becose of when we mearje the two object that time:
//first coman values are over ride the other object
//and there have some aditional value are present in other  object that also come in mearj object
//that case the all result are change.we cant occur the right result that case . 