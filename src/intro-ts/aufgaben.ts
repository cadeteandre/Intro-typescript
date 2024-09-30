//  =======================================
//          Level-1_12
//  =======================================
console.log("=========== Level-1_12");
let dogName = 'Leon';

console.log(dogName);
dogName = "elf";

let seventeen = 17;

const sum = seventeen + 44;
console.log(sum);

//  =======================================
//          Level-1_13
//  =======================================
console.log("=========== Level-1_13");

// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log('subtraktion: ' + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log('multiplication: ' + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log('division: ' + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log('modulus: ' + modulo_operator);

//  =======================================
//          Level-1_8
//  =======================================
console.log("=========== Level-1_8");

const x: number = 20;
const y: number = 30;

console.log(x + y);
console.log(y - x);
console.log(x - y);
console.log(x * y);
console.log(x / y);

const z: number = 10;

const resultOne: number = (x * y) / z;

console.log(resultOne);


let a: number = 15;
let b: number = 9;
console.log((a % b));

const c:number = 20;
const resultTwo = (a + b) * c;

console.log(resultTwo);

a++;
console.log(a);
b--;
console.log(b);

const resultThree = a - b;

console.log(resultThree);

console.log((resultOne % resultTwo));

//  =======================================
//          Level-1_16
//  =======================================
console.log("=========== Level-1_16");


let score: number = 5 + 5 * 10;  
console.log('Ergebnis: ' + score);

let score2 = (5 + 5) * 10;  
console.log('Ergebnis: ' + score2);

let score3 = 0;  
score3 = score3 + 10;  
console.log('Ergebnis: ' + score3);

score3 += 10;  
console.log('Ergebnis: ' + score3)

let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;

zahl++;  
console.log('increment: ' + zahl);

zahl--;  
console.log('dekrement: ' + zahl);

//  =======================================
//          String Methods Level-1_1
//  =======================================
console.log("=========== String Methods Level-1_1");

const firstName: string = "André";
const lastName: string = "Cadete";

console.log(firstName.length);
console.log(lastName.length);

const fullName:string = `${firstName} ${lastName}`;
console.log(fullName.length);

//  =======================================
//          String Methods Level-1_2
//  =======================================
console.log("=========== String Methods Level-1_2");

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean";

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

//  =======================================
//          String Methods Level-1_3
//  =======================================
console.log("=========== String Methods Level-1_3");

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));

//  =======================================
//          String Methods Level-1_5
//  =======================================
console.log("=========== String Methods Level-1_5");

const whereIsSusi = 'Susi is back from codingschool';

const susi = whereIsSusi.substring(0, 4);
const is = whereIsSusi.substring(5, 7);
const school = whereIsSusi.substring(24);
const susiIsSchool = `${susi} ${is} ${school}`;
console.log(susiIsSchool);

const h1 = document.querySelector("h1");
h1.innerText = susiIsSchool;

//  =======================================
//          String Methods Level-1_7
//  =======================================
console.log("=========== String Methods Level-1_7");

const samStatus = "Sam is good at codingschool";

console.log(samStatus.replace("good", "bad"));
console.log(samStatus.replace("Sam", "Susi"));
console.log(samStatus.replace("school", "tennis"));

//  =======================================
//          String Methods Level-1_8
//  =======================================
console.log("=========== String Methods Level-1_8");

const whereIsSam = "Sam is going to school";

console.log(whereIsSam.toUpperCase());
console.log(whereIsSam.toLowerCase());
console.log(`${whereIsSam.substring(0, 3).toUpperCase()} ${whereIsSam.substring(4, 15)} ${whereIsSam.substring(16).toUpperCase()}`);
console.log(`${whereIsSam.substring(0, 3).toLowerCase()} ${whereIsSam.substring(4, 15).toUpperCase()} ${whereIsSam.substring(16)}`);
console.log(`${whereIsSam.substring(0, 3)} ${whereIsSam.substring(4, 5).toUpperCase()}${whereIsSam.substring(5, 6)} ${whereIsSam.substring(7, 8).toUpperCase()}${whereIsSam.substring(8, 12)} ${whereIsSam.substring(13, 14).toUpperCase()}${whereIsSam.substring(14, 15)} ${whereIsSam.substring(16)}`);
// console.log(`${whereIsSam.charAt(0).toUpperCase()}`);

//  =======================================
//          String Methods Level-1_9
//  =======================================
console.log("=========== String Methods Level-1_9");

const infoAboutSam = "Sam is going to codingschool";
const susy = "Susy";
const and = " and ";

console.log(infoAboutSam.concat(and.concat("to the movie theater")));
console.log(infoAboutSam.substring(0, 12).concat(" to the movie theater"));
console.log(susy.concat(and.concat(infoAboutSam.replace("codingschool", "school"))));

console.log(susy.concat(and.concat(infoAboutSam.replace("is going to codingschool", "are going to the movie theater"))));
console.log(susy.concat(and.concat(infoAboutSam.replace("is going to codingschool", "are going gym and to the movie theater"))));

