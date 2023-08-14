//String Methodes
//lenght
let text='i live in the pune';
let textLenght=text.length;
console.log('text lenght:',textLenght);
//stringslice methode:
//sntax:stringslice(start,end)
let a=text.slice(2,7);
console.log('slice text:',a);
//substring()
let b=text.substring(2,5)
console.log('substring of',b);
//Replace();
let m='hello everyone i am nilam more'
let rep=m.replace('hello','Hi');
console.log('replace hello with:',rep);
//replaceAll()
let n='hello everyone i am nilam more hello vaibhav more and hello Neev more'
let repp=n.replaceAll('hello','Hi');
console.log('replace hello with:',repp);
//concat() means combined the both string
let fName='nilam';
let lName='more';
let aName=fName+ " "+ lName;
console.log('concat the first name and last name:',aName);
//othe way
let f=fName.concat(' ',lName);
console.log('other way of concat:',f);
//touperCAse()
let u=fName.toUpperCase();
console.log('lower case to upercase Name:',u);
//toLowerCase()
let uper= 'NEEV';
let low= uper.toLowerCase();
console.log('upercase to lower:',low);
//trim() to remove the white spleces from both side
let city='  pune            '
let c= city.trim();
console.log('string of city',c);
//trimSarts() he trimStart() method works like trim(), but removes whitespace only from the start of a string.
let ts=city.trimStart();
console.log('strim start remove space:',ts);
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let te=city.trimEnd();
console.log('end trim revove end space:',te);
//slpit() A string can be converted to an array with the split() method:
let txt='hello word happy independend day';
let spliArry=txt.split('');
console.log('array of slite:',spliArry);
console.log(spliArry.length);
console.log(spliArry[10]);

