/* Nivell 1 */
// Exercici 1
function promiseGen (bool) {
  return new Promise((res, rej) => {
    bool ? res('Promesa resolguda correctament') : rej('Promesa rebutjada')  
  })
}

promiseGen(5 > 3)
  .then(res => console.log(res)) // output: 'Promesa resolguda correctament'
  .catch(err => console.log(err))

promiseGen(3 > 5)
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: 'Promesa rebutjada'

// Exercici 2
const printer = (str) => console.log(str)
const printMessage = (str, fn) => fn(str)
printMessage('Hello World', printer) // output: 'Hello World'

/* Nivell 2 */
// Exercici 1
let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

const getEmployee = (id) => {
  const employee = employees.find(e => e.id === id)
  return new Promise((res, rej) => {
    employee ? res(employee) : rej(`Employee with id ${id} not found`)
  })
}

getEmployee(2)
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: { id: 2, name: 'Bill Gates' }

getEmployee(10)
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: Employee with id 10 not foun

// Exercici 2
const getSalario = (employee) => {
  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((res, rej) => {
    salary ? res(`El salari del treballador ${employee.id} és: ${salary.salary}`) : rej(`Salary of employee with id ${employee.id} not found`)
  })
}

getSalario({id: 2, name: 'Bill Gates'})
  .then(res => console.log(res)) // output: El salari del treballador 2 és: 1000
  .catch(err => console.log(err))

getSalario({id: 10, name: 'Vic'})
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: Salary of employee with id 10 not found

// Exercici 3
getEmployee(3)
  .then(res => getSalario(res))
  .then(res => console.log(res)) // output: El salari del treballador 3 és: 2000

/* Nivell 3*/ 
// Exercici 1
getEmployee(8)
  .then(res => getSalario(res))
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: Employee with id 8 not found