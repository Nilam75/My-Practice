// in array the shallo copy to used the direct assignment.
let colors=['Yellow','Black','White','Red',];
console.log("original Array",colors);
//to copy the original array to other elemnts directly assignig of value i.e:-
let color1=colors;
console.log("copy of original:",color1);
//let change in the copy array and print it 
color1[1]='pink';
console.log('to check the change',color1);
console.log('orinal arry also changed value:',colors);
//in shollow coppy original arry copied other element have same memory location

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//deep on array
let cars=['swift','alto','i10','i20'];
console.log("original cars:",cars);
//to make the deep copy on element to used the spread oprators(...)
let cars1=[...cars];
console.log('the copy of arry:',cars1);
//to change the alto of Audi
cars1[1]='audi';
console.log('the chenge array:',cars1);
console.log("original cars:",cars);
//there are no changes of original array.....
//copy element create the new memoery space and any changes of done by that memeory
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// shallow copy on object
let emp={
    ename: 'nilam',
    salary:80000,
    age:30,
    address:'pune'

}
//copy this object other element
let emp1=emp;
console.log('orignal of emp',emp);
console.log('copy of orinal emp1',emp1);
//to change the adreess of emp
emp1.address='satara';
console.log('orignal of emp',emp);
console.log('copy of orinal emp1',emp1);
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//deep copy of an object

let emp2={
    ename: 'nilam',
    salary:80000,
    age:30,
    address:'pune'

}
let empp={...emp2};
console.log('original',emp2);
console.log("the copy of:",empp);
//to change the salary value of object to find out the orignal object are affected or not
empp.salary=90000;
console.log('original',emp2);
console.log("the copy of:",empp);

