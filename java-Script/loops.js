
//in js there are loopstype:for,for in,for off,while,dowhile,
let list = ['i10', 'i20', 'alto', 'Brezza', 'audi', 'farari', 'swift',]
console.log('Arry of list', list[0]);
console.log('Arry of list', list[1]);
console.log('Arry of list', list[2]);
console.log('Arry of list', list[3]);
console.log('Arry of list', list[4]);
console.log('Arry of list', list[5]);
console.log('Arry of list', list[6]);
console.log('Arry of list', list[7]);
console.log('Arry of list', list[8]);
//length operator:will give length of aaray:here 7-8 index not present in list=it give us Undifinde
//avoide that Undifined used lenght properties
console.log('Array length is:',list.length);//to give lenght of array
//to avoide this lots of lining of code used the loops for example:
//For(variable Declaration and Assiged value;condition;increment OR decrement )
for (let l = 0; l < list.length; l++) {
    console.log(list[l]);
    
}
//for in that used on object propertis
let stud={
    studentName:'Tushar',
    studePhone:145236987,
    StudeAge:25
}
for (let s in stud) {
console.log('Details of Students',stud[s]);
    }
//in arrey
//note: Do not use for in over an Array if the index order is important.
//The index order is implementation-dependent, and array values may not be accessed in the order you expect.
//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// for(let l in list)
// {
//    console.log('arrey',list[l]); 
// }
let car = ['i10', 'i20', 'alto', 'Brezza', 'audi', 'farari', 'swift',]

for(let l of car)
{
   console.log('arrey',l); 
}
//do while loop
let h = 10;

do {
    h++;
    console.log(h);
}
while (h < 15)






