function hello() {
    console.log('hey');
}
console.log(hello());
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(sum(4));
