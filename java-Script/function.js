//function Syntax: function function name(){}
function emp(){
    let emploee=[
        {Name:'nilam',age:30},
        {Name:'Vaibhav',age:31},
        {Name: 'Sarika',age:32}
    ];
    let onlyName=emploee.map(emploeeData =>{
        return emploeeData.Name;
    })
    console.log('Onaly name of the emploee:',onlyName);
}