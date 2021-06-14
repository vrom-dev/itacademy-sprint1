const employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}]

const salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}]

/* Nivell 1 */
// Exercici 1
const getEmpleado = (id) => {
  const employee = employees.find(e => e.id === id)
  return new Promise((res, rej) => {
    employee ? res(employee) : rej(`Employee with id ${id} not found`)
  })
}
const getSalario = (employee) => {
  const salary = salaries.find(s => s.id === employee.id)
  return new Promise((res, rej) => {
    salary ? res(salary.salary) : rej(`Salary of employee with id ${employee.id} not found`)
  })
}

// Exercici 2
const asyncPrinter = async (id) => {
  const employee = await getEmpleado(id)
  const salary = await getSalario(employee)
  console.log(`Nom: ${employee.name} Salari: ${salary}`)
}
asyncPrinter(3) // output: 'Nom: Jeff Bezos Salari: 2000'

/* Nivell 2 */
// Exercici 1
const sayHiAfter2s = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(name.trim()) res(`Hi ${name}`)
      else rej('You need to pass a name as a parameter')
    }, 2000)

  })
}

const startFn = async (name) => {
  const message = await sayHiAfter2s(name)
  console.log(message)
}

startFn('Vic') // output: 'Hi Vic'

/* Nivell 3 */
// Exercici 1
const sayHiAfter2sv2 = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(!name || typeof name !== 'string' ||!name.trim()) rej('Error. You need to pass a string as a parameter')
      else res(`Nice! ${name}`)
    }, 2000)

  })
}

const startFnv2 = async (name) => {
  try {
    const message = await sayHiAfter2sv2(name)
    console.log(message)
  } catch (e) {
    console.log(e)
  }
}

startFnv2('        ') // output: 'Error. You need to pass a string as a name'
startFnv2('') // output: 'Error. You need to pass a string as a name'
startFnv2() // output: 'Error. You need to pass a string as a name'
startFnv2(1234) // output: 'Error. You need to pass a string as a name'
startFnv2('Vic') // output: 'Hi Vic'