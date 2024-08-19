//interface
interface employee {
  firstName: string,
  lastName: string,
  ID: number
}

function getEmployeeDetails(firstName, lastName, ID) {
  console.log(firstName);
  console.log(lastName);
  console.log(ID);
}

/*getEmployeeDetails({
  firstName: 'Shakir'
  lastName: 'Azam'
  ID: 12345
})*/