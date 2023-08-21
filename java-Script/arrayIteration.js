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

// used the array map() method
let emploee=[
    {Name:'nilam',age:30},
    {Name:'Vaibhav',age:31},
    {Name: 'Sarika',age:32}
];
let onlyName=emploee.map(emploeeData =>{
    return emploeeData.Name;
})
console.log('Onaly name of the emploee:',onlyName);