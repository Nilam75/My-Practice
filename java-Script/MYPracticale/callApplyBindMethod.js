//call():is predefinde method in js.it is work specifing the object
let person={Name:'Vaibhav',age:32};
function sayHello(){
    return person.Name;

}
console.log(sayHello.call(person));
