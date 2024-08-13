//JS Functions
function sayFact() {
    let name = console.log("what is your name");
    if (name === "Sofia") {
        console.log("Your name come from Greek -> Sophia");
    
    }
}
sayFact();
//JS Functions Parameters

function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

let firstName = console.log("What is your first name");
let lastName = console.log ("What is your last name" );
fullName(firstName, lastName);
fullName("Kate", "Robinson");

//JS Functions Return
function add(x, y) {
    return x + y;
}

let result = add(3, 4);
let result2 = add(result, 0);

function getFulName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;

}

let userFullName = getFulName("Kate", "Robinson");
console.log(userFullName);
console.log(getFulName("Julie", "Smith"))