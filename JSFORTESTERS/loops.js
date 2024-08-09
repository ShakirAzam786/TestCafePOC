//while loop
let times = 0;
while (times <10) {
    console.log(times);
    times = times +1;
}
//forEach loop
let fruits = ['apples', 'oranges', 'bananas'];
fruits.forEach(function(fruit){
    console.log ("I have " + fruit + " in my shopping bag");
});
// do while loop
let times1 = 0;
do {
    console.log(times1);
    times1 = times1 +1 ;
} while (times1 < 10)

//for loop

for (let i=0; i<10; i++){
    console.log("i is " + i);
}
let myList ;
let length ;
for (let i = 0; i < myList.length; i++){
    console.log("I have " + myList[i] + " in my shopping bag");
}
//Remove first item
fruits.shift();

