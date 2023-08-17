//array lenght :it is the property not methods
const list=['apple','banana','mango','orange'];
let len=list.length;
console.log('lenght of array:',len);

//tostring():it converts array in string
const list1=['apple','banana','mango','orange'];
console.log('tostring conversats array in string:',list1.toString());

//pop() :to remove the last elements and its retuns
const list2=['apple','banana','mango','orange'];
console.log('pop to dealete the last elements and its retuns:',list2.pop());

//push():it add element in last
const list3=['apple','banana','mango','orange'];
console.log('oridanal arraay',list3);
list3.push('kivi','jackfruit');
console.log('push to add the last elements one or more:',list3);

//shift()to remove item on start and its retune
const list4=['apple','banana','mango','orange'];
console.log('origanal arraay',list4);
let s=list4.shift();
console.log('shift delete the frist items and its returns:',s);


//unshift()to add new item in 0th index
const list5=['apple','banana','mango','orange'];
console.log('origanal arraay',list5);
list5.unshift('dragon fruit','Painapple');
console.log('add item to the frist:',list5);

//delete:delete are used for the delete item in arry but it cant remove the space of that item(undifined hole)
//in the method item was deleted but array lenght not cahanged.
const list6=['apple','banana','mango','orange'];
console.log('origanal arraay',list6);
//frist find the index of which item are we want to delete
let findIndex=list6.indexOf('mango');
//delete not method
delete list6[findIndex];
console.log('shift delete the frist items and its returns:',list6);

//array concat():two arrray concatination used the array concat()
let arry1=['apple','banana','mango','orange'];
console.log('arry1 of:',arry1);
let arry2=['dragon fruit','Painapple'];
console.log('arry2 of:',arry2);
let arryConcat= arry1.concat(arry2);
console.log('bothe array are mearg:',arryConcat);

//array jone(): it is mostly used in the birth date. to add the specilal charachator in beteweev array
let dob=[31,8,1993];
console.log('original arry of BOD:',dob);
console.log('to add the slecial symbol and make properBOD:',dob.join('/'));
//to make the numaricale value in string used methode in the methode
console.log('to add slecial charactor and make string:',dob.join('/').toString());

//slice() methode the cut the array and give new lenght of array.
const list7=['apple','banana','mango','orange'];
console.log('origanal arraay',list7);
//it cut the item on original array and made its new arry with new lenght
const cut=list7.slice(0,2);
console.log('cut the items and retun neww array:',cut);

//splice():to remove and add the items in between the array
const list8=['apple','banana','mango','orange','painapple'];
console.log('original array:',list8);
//console.log(list8.splice(0,2));//detete the item given index of items and remove all items in that index
//and retuns the original list of item are present.
list8.splice(1,1,'kivi','papayya');
console.log('splice:',list8);

//sort to sort alphabetically and retune new array
const list9=[ 'kivi','papaya','apple','banana','mango','orange','painapple'];
console.log('original array:',list9);
list9.sort();
console.log('sorted array:',list9);

//reverse()
const list10=[ 'kivi','papaya','apple','banana','mango','orange','painapple'];
console.log('original array:',list10);
list10.reverse();
console.log('sorted array:',list10);
