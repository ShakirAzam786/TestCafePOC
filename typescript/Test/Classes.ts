//classes
class Employee{
  employeeName: string;

  constructor(name){
    this.employeeName = name
  }
  hello(name){
    console.log(`hello ${name}`)
  }
}

let emp1 = new Employee('Shakir');
console.log(emp1.employeeName);
//emp1.hello()

class Manager extends Employee{
  constructor(name){
    super(name);

  }

}

let manager1 = new Manager('Azam')
console.log(manager1.employeeName);
//manager1.hello();

//Access modifiers
