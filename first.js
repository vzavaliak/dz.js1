let str1 = 'hello';
console.log(str1);

let str2 = 'owu';
console.log(str2);

let str3 = 'com';
console.log(str3);

let str4 = 'ua';
console.log(str4);

let a = 1;
console.log(a);

let b = 10;
console.log(b);

let c = -999;
console.log(c);

let d = 123;
console.log(d);

let e = 3.14;
console.log(e);

let f = 2.7;

console.log(f);
let g = 16;
console.log(g);

let active = true;
console.log(active);

let noactive = false;
console.log(noactive);

document.write(`<h1>${str1} ${str2} ${str3} ${str4}</h1>`);
document.write(`<h2>${a} ${b} ${c} ${d}  ${e} ${f} ${g}</h2>`);
document.write(`<h2>${active} ${noactive}</h2>`);

alert(str1+' '+ str2+' '+str3+' '+str4);
alert(a+' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+' '+active+' '+noactive);






str1 = 'hi';
console.log(str1)

str2 = 'okten';
console.log(str2);

str3 = 'school';
console.log(str3);

str4 = 'lesson1';
console.log(str4);

a = 2;
console.log(a);

b = 20;
console.log(b);

c = -100;
console.log(c);

d = 90;
console.log(d);

e = 3.97;
console.log(e);

f = 1.2;
console.log(f);

g = 69;
console.log(g);

active = true;
console.log(active);

noactive = false;
console.log(noactive);

document.write(`<h1>${str1} ${str2} ${str3} ${str4}</h1>`);
document.write(`<h2>${a} ${b} ${c} ${d}  ${e} ${f} ${g}</h2>`);
document.write(`<h2>${active} ${noactive}</h2>`);

alert(str1+' '+ str2+' '+str3+' '+str4);
alert(a+' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+' '+active+' '+noactive);






const age = 24;
console.log(age)

const birday = 24.07;
console.log(birday)

const born = 1996;
console.log(born)

const hobbi = 'football';
console.log(hobbi)

const contry = 'Ukrain';
console.log(contry)

const  city = 'Lviv';
console.log(city)

document.write(`<h2>${contry} ${city}</h2>`)
document.write('<h2>'+hobbi+'</h2>')
document.write(`<h2>${birday}.${born}-${age}</h2>`)

alert(contry+' '+city)
alert(birday+'.'+born)
alert(age)
alert(hobbi)







let name ='zavaliak'
console.log(name)
let lastName ='volofymur'
console.log(lastName)
let fatherName ='Igorovuch'
console.log(fatherName)

document.write(`<h2>${name} ${lastName} ${fatherName}</h2>`)
alert(name+' '+lastName+' '+fatherName)

let x = prompt('what is your name?')
console.log(x)

let y = prompt('what is your last name?')
console.log(y)

let z = prompt('what is your fathername?')
console.log(z)







let person = name +' '+ lastName +' '+fatherName
console.log(person)







let mamName ='zavaliak'
console.log(mamName)
let mamlastName ='oksana'
console.log(mamlastName)
let mamFatherName ='muhalivna'
console.log(mamFatherName)

document.write(`<h2>${mamName} ${mamlastName} ${mamFatherName}</h2>`)
alert(mamName+' '+mamlastName+' '+mamFatherName)







let mamX = prompt('what is your name?')
console.log(mamX)

let mamY = prompt('what is your last name?')
console.log(mamY)

let mamZ = prompt('what is your fathername?')
console.log(mamZ)



let mamPerson = mamName +' '+ mamlastName +' '+ mamFatherName
console.log(mamPerson)







let userAge = +prompt('how old ar you?')
console.log(userAge)
let bornYear = +prompt('year of birthdey?')
console.log(bornYear)
let favoritNamber = +prompt('what is your favorit namber?')
console.log(favoritNamber)





let firstNum2 = parseInt(prompt('First number?'));
console.log(firstNum2)
let secondNum2 = parseInt(prompt('Second number?'));
console.log(secondNum2)
let thirdNum2 = parseInt(prompt('Third number?'));
console.log(thirdNum2)
let fourthNum2 = parseInt(prompt('Fourth number?'));
console.log(fourthNum2)

let result = firstNum2 + secondNum2 + thirdNum2 +fourthNum2
console.log(result)






let numOne = parseFloat(prompt('number one?'))
console.log(numOne)
let numTwo = parseFloat(prompt('number two?'))
console.log(numOne)
let numFour = parseFloat(prompt('number four?'))
console.log(numOne)

let numResult = numOne + numTwo + numFour
console.log(numResult)






let oneNam = Math.round(prompt('first namner?'))
console.log(oneNam)

let twoNam = Math.round(prompt('second namner?'))
console.log(twoNam)

let thryNam = Math.round(prompt('third namner?'))
console.log(thryNam)


let numResult1 = oneNam + twoNam + thryNam
console.log(numResult1)






let o1 = 100;
console.log(typeof o1, o1)
let o2 ='100';
console.log(typeof o2,o2)
let o3 = true;
console.log(typeof o3, o3)
let o4 = undefined;
console.log(typeof o4, o4)







let a1 = 5 < 6;
console.log(a1)
let a2 = 5 > 6;
console.log(a2)
let a3 = 5 == 6;
console.log(a3)
let a4 = 5 >= 6;
console.log(a4)
let a5 = 10 == 10;
console.log(a5)
let a6 = 10 === 10;
console.log(a6)
let a7 = 10 > 10;
console.log(a7)
let a8 = 10 < 10;
console.log(a8)
let a9 = 10 != 10;
console.log(a9)
let a10 = 123 < 123;
console.log(a10)
let a11 = 123 == 123;
console.log(a11)



console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 ); //true
console.log(99 > 100 && 45 > 12 ); ////false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); ////false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //true
console.log(!!'-1'); //true
console.log(!!-1); //true
console.log(!!'0'); //true
console.log(!!'null'); //true
console.log(!!'undefined'); //true
console.log(!!(3/'owu')); ////false
console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); ////false

