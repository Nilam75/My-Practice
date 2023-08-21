//shallo copy: it is the the formate the same memory.
let stringData=['nilam','vaibhav','more'];
//console.log("to assigne the memory to the string:original Array is:",stringData);
let shalloCoppy=stringData;
shalloCoppy[0]='Neev';
console.log("the new arry of data:",shalloCoppy);
//original array
console.log('stringData:=',stringData);

//deep copy: it is not used the same memory.its create the is new memeory.
//its means the original memory and new memory are not same.
let emp={ename:'vaibhav',
         salary:50000,
         Designation:'junor enginiar'
        }
        console.log("orignal object:",emp);
        //when we formate the eployee name that time the new memory asigned
        let newEmp=JSON.parse(JSON.stringify(emp));
        console.log("new Emploee:",newEmp);
        //when it modified 
        newEmp.Designation='manager';
        console.log("change the data:",newEmp);
        //there are no changes in original(emp),
        //it is create the original copy to other element and modifed that element andallocate the new memory 