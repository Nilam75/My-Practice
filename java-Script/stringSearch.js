//The indexOf() method returns the index (position) the first occurrence of a string in a string:
let pos='neev'
let p=pos.indexOf('v')
console.log("index of the n:",p);
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text = "Please locate where locate occurs!";
let index = text.lastIndexOf("locate");
console.log('last index of:',index);
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let txt = "Please locate where 'locate' occurs!";
let st=txt.search("locate");
console.log('sersch te string retuns position:',st);
//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let matchString = "The rain in SPAIN stays mainly in the plain";
let mt=matchString.match("ain");
console.log('match the string the :',mt);
//it returns the first which value are come its index and positionsta



//The includes() method returns true if a string contains a specified value Otherwise it returns false..
let imcludt = "Hello world, welcome to the universe.";
let im=imcludt.includes("world");
console.log('word are present or not in strings:',im);

//startswith() The startsWith() method returns true if a string begins with a specified value Otherwise it returns false:.
let startwith = "Hello world, welcome to the universe.";
let sw=startwith.startsWith("Hello");
console.log('string start with hello or not:',sw);
 //The endsWith() method returns true if a string ends with a specified value Otherwise it returns false:.

 let endwith = "John Doe";
 let ew=endwith.endsWith("Doe");
 console.log('end of leter right or wrong',ew);