/* Nivell 1 */
// Exercici 1
function promiseGen (bool) {
  return new Promise((res, rej) => {
    bool ? res('N1-E1: Promesa resolguda correctament') : rej('N1-E1: Promesa rebutjada')  
  })
}

promiseGen(5 > 3)
  .then(res => console.log(res)) // output: 'N1-E1: Promesa resolguda correctament'
  .catch(err => console.log(err))

promiseGen(3 > 5)
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: 'N1-E1: Promesa rebutjada'

// Exercici 2
const printer = (str) => console.log(str)
const canIDrink = (age, fn) => {
  const message = age >= 18 ? `N1-E2: Tens ${age} anys. Pots beure` : `N1-E2: Et falten ${18-age} anys per poder beure`
  fn(message)
}
canIDrink(23, printer) // output: 'N1-E2: Tens 23 anys.Pots beure'
canIDrink(13, printer) // output: 'N1-E2: Et falten 5 anys per poder beure'

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
    employee ? res(employee) : rej(`N2-E1: Employee with id ${id} not found`)
  })
}

getEmployee(2)
  .then(res => console.log('N2-E1: ' + JSON.stringify(res))) // output: 'N2-E1: { id: 2, name: 'Bill Gates' }'
  .catch(err => console.log(err)) 

getEmployee(10)
  .then(res => console.log(res))
  .catch(err => console.log(err)) // output: 'N2-E1: Employee with id 10 not found'

// Exercici 2
const getSalario = (employee) => {
  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((res, rej) => {
    salary ? res(`El salari del treballador ${employee.id} és: ${salary.salary}`) : rej(`Salary of employee with id ${employee.id} not found`)
  })
}

getSalario({id: 2, name: 'Bill Gates'})
  .then(res => console.log('N2-E2: ' + res)) // output: 'N2-E2: El salari del treballador 2 és: 1000'
  .catch(err => console.log(err))

getSalario({id: 10, name: 'Vic'})
  .then(res => console.log(res))
  .catch(err => console.log('N2-E2: ' + err)) // output: 'N2-E2: Salary of employee with id 10 not found'

// Exercici 3
getEmployee(3)
  .then(res => getSalario(res))
  .then(res => console.log('N2-E3: ' + res)) // output: 'El salari del treballador 3 és: 2000'

/* Nivell 3*/ 
// Exercici 1
getEmployee(8)
  .then(res => getSalario(res))
  .then(res => console.log(res))
  .catch(err => console.log('N3-E1: ' + err)) // output: Employee with id 8 not found