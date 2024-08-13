// Object Oriented programming in JS
  // How to create Objects - Classes
    // OBJECT LITERALS
const alien1 = {
  name: "Ali", //property
  species: "alien", //property
  sayPhrase: () => console.log("I'm Ali the alien"), //method
  fly: () => console.log("Zzzzziiiinnnngggg!!")
}
const alien2 = {
  name: "Lien",
  species: "alien", 
  sayPhrase: () => console.log("Run for you lives!"),
  fly: () => console.log("Zzzzziiiinnnngggg!!")
}
const bug1 = {
  name: "Buggy",
  species: "bug", 
  sayPhrase: () => console.log("Your debugger doesn't work with me!"),
  hide: () => console.log("You can't catch me now!")
}
const bug2 = {
  name: "Erik",
  species: "bug", 
  sayPhrase: () => console.log("I drink decalf!"),
  hide: () => console.log("You can't catch me now!")
}
const robot1 = {
  name: "Tito",
  species: "robot", 
  sayPhrase: () => console.log("I can cook, swim and dance!"),
  transform: () => console.log("Optimus prime!")
}
const robot2 = {
  name: "Terminator",
  species: "robot", 
  sayPhrase: () => console.log("Hasta la vista, baby!"),
  transform: () => console.log("Optimus prime!")
}

console.log(alien1.name);
console.log(bug2.species);
robot1.sayPhrase();
robot2.transform();