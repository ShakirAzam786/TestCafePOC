//Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, 4];
console.log(list1[1]);
//Tuple
var tuple1;
tuple1 = [10, 'hello'];
console.log(tuple1[1].substring(1));
//Enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
//Unknown
var notSure = 4;
console.log(notSure);
//Any
var anyValue;
anyValue = 10;
anyValue = 'Damm';
anyValue = true;
console.log(anyValue);
//void
function warnUser() {
    console.log("This is my warning message");
}
