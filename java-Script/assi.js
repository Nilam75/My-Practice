let cars = ['i10', 'kia', 'swift', 'bmw', 'audi'] 
cars.splice(2, 1);
 let newCars3 = [] 
 for (let i = 0; i < cars.length; i++) { 
    newCars3.push(cars[i]) 
} 
console.log('newCars3', newCars3); 
let newCars4 = [] 
cars.forEach(ele => { newCars4.push(ele) }) 
console.log('newCars4', newCars4);