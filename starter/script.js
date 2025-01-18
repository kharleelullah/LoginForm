/*let  jS = "amazing";
if (jS === "amazing") alert("Hope it was fun!");

(40-22);
console.log(40-22);
*/

let age = 30;
age = 20;

const birthYear = 1991;
/* birthYear = 1992; it's wrong because birth year can't be changed unlike let*/

//Mathematical operator
const now = 2029
const ibraheemAge = now - 1998;
const zainabAge = now - 1999;
   console.log(ibraheemAge, zainabAge);

   console.log( ibraheemAge *2, ibraheemAge / 10, 2**3);

//concat
const firstName = "ibraheem";
const lastName = "soliu";

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 5;
x +=10; // x = x + 10 = 25
x *=4;  // x = x * 4 = 100 // 25*4=100
x++;  // x = x+ 1 = 101// 100+1
x--; // x = x -1 = 100 // 101-1
 console.log(x);

//Comparison operator
    console.log(ibraheemAge > zainabAge);
    console.log(ibraheemAge >= 100);
    console.log(ibraheemAge < zainabAge);
    console.log(ibraheemAge <= zainabAge);
    console.log(now - 1998 > now - 1999);

///CHALLENGE ONE
const markWeightOne = 78;
const markHeightOne =  1.69;

const johnWeightOne = 92;
const johnHeightOne = 1.95;

const bmiMark = markWeightOne / markHeightOne ** 2;
const bmiJohn = johnWeightOne / (johnHeightOne * johnHeightOne);

console.log(bmiMark,bmiJohn);

//or

const markHeightTwice = 1.69**2;
const johnHeightTwice = 1.95**2;

console.log( markWeightOne / markHeightTwice);
console.log( johnWeightOne / johnHeightTwice);


// TEST 2

const markWeightTwo = 95;
const markHeightTwo = 1.88;

const johnWeightTwo = 85;
const johnHeightTwo = 1.76;

const bmiMarkTwo = markWeightTwo / markHeightTwo ** 2;
const bmiJohnTwo = johnWeightTwo / (johnHeightTwo * johnHeightTwo);

console.log(bmiMarkTwo , bmiJohnTwo);

//or
let markHeightTwoTwice = 1.88**2;
let johnHeightTwoTwice = 1.76**2;

console.log( markWeightTwo / markHeightTwoTwice);
console.log( johnWeightTwo / johnHeightTwoTwice); 

//HIGHER BMI
let markHigherBMI_ = (bmiMark > bmiJohn);

console.log(markHigherBMI_);
//or
 let markHigherBMI = "markWeightOne / markHeightTwice";
 let johnHigherBMI = "johnWeightOne / johnHeightTwice";
   
 console.log( markHigherBMI > johnHigherBMI );


 //TEST2
 let markHigherBMITwo = (bmiMarkTwo > bmiJohnTwo);

console.log(markHigherBMITwo);



//STRINGS AND TEMPLATE LITERALS
const myName = "Adewale";
const job = "Teacher";
const bYear = "1999";
const presentYear = "2024";

const ibraheemSoliu = ("I'm " + myName + ", a " + ( presentYear - bYear) + " years old " + job + "!");

console.log(ibraheemSoliu);

//TEMPLATE  

const templateLiteral = `I'm ${myName}, a ${presentYear - bYear} years old ${job}!`;

console.log(templateLiteral );

console.log('Just a regular string...');

console.log('Just \n\
a regular\n\
string...');

console.log(`Just
a regular 
string...`); 

//IF_ELSE STATEMENT
 const pornHubAge = 17;
 
 if( pornHubAge >= 20){
    console.log("Enjoy the sensational view");
 }
  else{
    const allowAge = pornHubAge + 3;
    console.log(`You are too young to sign-up for this website.Only ${allowAge} years of age or more is allowed to use this website`);
  }



    const birthYear_ = 1995;

    let century;
    if(birthYear_ >= 2000){
        century = 21;
    }
    else{
        century = 20;
    }

    console.log(century);

///CHALLENGE ONE
if (bmiMark < bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn} `);
}
else{
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`)
}

///OR
const markBmiDecision = 24.3;
const johnBmiDecision = 27.2;

if( markBmiDecision > johnBmiDecision){
    console.log(`Mark's BMI is higher than john's BMI`);
}
else {
    console.log(`John's BMI is higher than Mark's BMI`);
}

///EQUALITY OPERATION == or ===
//getting value from any web page by using a PROMPT FUNCTION..you create a variable where the value will be stored

const favorite =Number(prompt("What's your favorite color?"));
console.log(typeof favorite);

if (favorite === 23){
    console.log(` 23 is an amazing number`);
}
else if(favorite === 7){
    console.log(`7 is also a cool number`);
}
else if(favorite === 9){
    console.log(`9 is also a cool number`);
}

else{
    console.log(`Number isn't 7 or 23 or 9`);
}

if(favorite !== 23, 7, 9){
    console.log(`Why not 23 or 7 or 9`);
}

//TYPE CONVERSION
const inputYear = Number(1991);
console.log(inputYear + 8);
console.log(String(23), 23)

//TYPE COERCION
let n = '1' + 1;
n = n-1;
console.log(n);

let m = '1'- 1;
m = m-1;
console.log(m);

//BOOLEAN LOGICAL - LOGICAL OPERATION
// and - or -not

const hasDriversLicense = true;//A
const hasGoodVision = false;//B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//if (hasDriversLicense && hasGoodVision){
//  console.log('Sarah is allowed to drive!');
//}else{
 //   console.log('someone else should drive...');
//} //



const isTired = true;//C

console.log(hasDriversLicense && isTired);
console.log(hasDriversLicense && isTired && hasGoodVision);

if (hasDriversLicense && hasGoodVision){
 console.log('Sarah is allowed to drive!');
 }else{
  console.log('someone else should drive...');
 }

 console.log(hasDriversLicense && !isTired && hasGoodVision);

// TEST 3

/*const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScorekoalas = (88 + 100 + 89) / 3;



console.log(averageScoreDolphins);
console.log(averageScorekoalas);

if (averageScoreDolphins > averageScorekoalas){
    console.log('Dolphins team average scores is higher than koalas team average score');
}else if(averageScoreDolphins < averageScorekoalas){
    console.log('koalas team average scores is higher than Dolphins team average score');
}else if(averageScoreDolphins === averageScorekoalas){
    console.log('Koalas team and Dolphins team have the same average score');
}else{
    console.log('Koalas team average scores is lower than Dolphins team average score');
}*/


const averageScorekoalas = (109 + 95 + 123) / 3;
const averageScoreDolphins = (97+ 112 + 101) / 3;


console.log(averageScoreDolphins, averageScorekoalas);

if (averageScoreDolphins > averageScorekoalas && averageScoreDolphins >=100 ){
    console.log('Dolphins team wins the cup');
}else if(averageScoreDolphins < averageScorekoalas && averageScorekoalas >=100){
    console.log('Koalas team wins the cup');
}else if(averageScoreDolphins === averageScorekoalas){
    console.log('Koalas team and Dolphins team have the same average score');
}

//SWITCH STATEMENT
 const day = 'tuesday';

switch (day){
    case "monday":
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Make coding videos');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekends');
    default:  
        console.log('Not a valid day');
}

if (day === 'monday'){
    console.log('plan course structure');
    console.log('Go to coding meetup');   
}else if(day === 'tuesday'){
    console.log('plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Make coding videos');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekends');
}else{
    console.log('Not a valid day');
}

//CONDITIONAL/TERNARY OPERATOR/ STATEMENT
const suitableAge = 20;
//suitableAge >=18? console.log('i like to drink wine🍷'):
//console.log('i like to drink water');//
 
const drink = suitableAge >=18? 'wine🍷': 'water💧';
console.log(drink);

let drink2;
   if(suitableAge >=18){
         drink2 = 'wine🍷';
   }else{
        drink2 = 'water💧';
}
console.log(drink2);

//CODE CHALLENGE 4
const bill = 275;

//const tip = bill >=50 && bill <=300 ? bill * 0.2  : bill * 0.15;
 
//console.log(`The bill was ${bill}, the tip ${tip}, and the total value ${bill + tip}`);


let tip;

if(bill >=50 && bill <=300){
   tip =  'bill * 0.2' ;
}else{
   tip = 'bill * 0.15';
}

console.log(tip);