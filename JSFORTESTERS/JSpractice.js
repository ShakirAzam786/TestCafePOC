/*COMMENTS*/
//You can comment in this fashion too
console.log('HelloWorld')//Comment
/*
VARIABLE CREATION
*/
let school = "Hecodes"
let fullpackage = "Hecode Pro"
let projects = 4;
let awesome = true;
/*
VARIABLE OPERATIONS
*/
let x = 2;
let y = 4
let z = x+y; //6
console.log(z);
let city = 'Lisbon' ;
let country = 'Portugal'
let place = city + " "+country;
console.log(place);
/*
VARIABLE DATA TYPES
*/
let age = 23; //number
let name = 'Shakir'; // String
let canCode = true ; //Boolean, could be false
/*
STRUCTURE STRUCTURE TYPES
*/
let students = ['Katie', 'Julie', 'Jahn']; //Array
let kate = {
    firtName: 'Kate',
    lastName: 'Johnson',
    age: 23, 
    canCode: true,
           }; //object
/* 
ALERTS & PROMPTS

//alert ("Ola");
let name1 = 'Angela';
//alert (name1);
//Prompts
let firstName = prompt('What is your first name');
let lastName = prompt('What is your lastname');
let fullName = firstName + " " + lastName;
alert(fullName);
*/
/*
IF ELSE
*/
//IF STATEMENT
let country1 = "India";
if (country1 == "Portugal") {
    console.log('you are cool');
}

if (country1 !== "Portugal") {
    console.log('Too bad for you');
}
//IF ELSE STATEMENT
let age3 = 16;
if (age3 < 18){
    console.log('you cannot apply');
} else {
console.log('you can apply')
}
//NESTED IF ELSE STATEMENTS

if (age3<18){
    console.log('you cannot boy');
} else {
    if (age3>120){
        console.log('too old to apply');
    }else{
        console.log('YOU CAN APPLY');
    }
}
/* 
LOGICAL STATEMENTS
*/
//Logical OR
if(age3 < 18 || gender == "Male"){
    console.log('You cannot join Hecode');
}
//Logical AND
let continent;
if (continent == 'Europe' && language == 'Portugal'){
    console.log('You are from Portugal');
} else {
    console.log('you are not from portugal');
}