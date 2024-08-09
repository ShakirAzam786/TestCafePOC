let name = "Hecodes"; // He started coding 
//String concatenation
let firstName = "Shakir";
let lastName = "Azam";
let fullName = firstName + " " + lastName; //Shakir Azam
console.log(fullName);
//or
//let fullName = `${firstName} ${lastName}`;
//TRIM
let city1 = "Montreal     ";
city1 = city1.trim();// "Montreal"
console.log(city1);
//REPLACE
let city2 = "Montreel";
city2 = city2.replace("e", "a"); // Montreal
//toLowerCase
let city4 = "Bengaluru";
city4 = city4.toLowerCase(); //bengaluru
//toUpperCase
let city5 = "Hyderabad";
city5 = city5.toUpperCase();
//Template literals
let city6 = "Denver";
let sentence = `Kate is from ${city6}`;