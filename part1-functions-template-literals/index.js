/* Nivell 1 */
// Exercici 1
function printName(str) {
  console.log(str)
}
printName('N1-E1: Víctor') // output: 'N1-E1: Víctor'

/* Nivell 2 */
// Exercici 1
function printFullName(name, surname) {
  console.log(`N2-E1: El meu nom és ${name} ${surname}`)
}
const name = 'Víctor'
const surname = 'Romero'
printFullName(name, surname) //output: 'N2-E1: El meu nom és Víctor Romero'

// Exercici 2
function returnFullName(name, surname) {
  return `${name} ${surname}`
}
console.log(`N2-E2: El meu nom és ${returnFullName(name, surname)}`) //output: 'N2-E2: El meu nom és Víctor Romero'

/* Nivell 3 */
// Exercici 1
function printFromZeroToNine () {
  console.log('\nImprimint llista del 0 al 9:')
  for (let i = 0; i < 10; i++) {
    console.log(`${i} `)
  }
}

const functionsArray = []

for(let i = 0; i < 10; i++) {
  functionsArray[i] = printFromZeroToNine
}

functionsArray.forEach(fn => fn()) // output(x10): Imprimint llista del 0 al 9: 0 1 2 3 4 5 6 7 8 9

// Exercici 2
const logName = ((str) => {
  console.log(str)
})('N3-E2: Víctor Romero') // output: 'N3-E2: Víctor Romero'