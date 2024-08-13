//OOP-Classes
class Alien { // Name of the class
  // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
  constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "Alien"
  }
  // These will be the object's methods.
  fly = () => console.log ("Zzzzziiiinnngggg")
  sayPhrase = () => console.log(this.phrase)
}

class Bug { 
  constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "bug"
  }
  hide = () => console.log ("You can't catch me now!")
  sayPhrase = () => console.log(this.phrase)
}
class Robot { 
  constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "Robot"
  }
  fly = () => console.log ("Optimus Prime!")
  sayPhrase = () => console.log(this.phrase)
}


//Instantiate our characters from those classes 

const alien1 = new Alien("Ali", "I'm Ali the alien!");
// We use the "new" keyboard follwed by the corresponding class name
// and pass it the corresponding parameters according to what was declared in the class constructor function
const alien2 = new Alien("Lein", "Run for your lives!");
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!");
const bug2 = new Bug("Erik", "I drink decaf!");
const robot1 = new Robot("tito", "I can cook, swim and dance!");
const robot2 = new Robot("Terminator", "Hasta la vista, baby!");

//now access each object properties and methods 

console.log(alien1.name);
console.log(alien2.species);
robot1.sayPhrase();
robot2.sayPhrase();