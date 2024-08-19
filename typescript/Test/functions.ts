function hello() {
  console.log('hey');
}

console.log(hello());

function sum(num1: number, num2: number = 10): number{
  if (num2)
  return num1 + num2
  else
  return num1
}

console.log (sum(4));

