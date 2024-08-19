//Arrays

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3,4];
console.log(list1[1]);

//Tuple
let tuple1: [number, string];
tuple1 = [10, 'hello'];
console.log(tuple1[1].substring(1));

//Enum
enum Color {Blue=2, Red, Green}
let colorName: string = Color[2];
console.log(colorName);

//Unknown

let notSure: unknown = 4;
console.log(notSure);

//Any

let anyValue: any;

anyValue = 10;
anyValue = 'Damm';
anyValue = true ;

console.log(anyValue);

//void
function warnUser(): void {
  console.log("This is my warning message");
}

// union types

let peopleAllowed: number|boolean;

peopleAllowed = 10;
peopleAllowed = false ;

console.log(peopleAllowed);



