/* Nivell 1 */
// Exercici 1
function printName(str) {
  console.log(str)
}
printName('Víctor') // output: 'Víctor'

/* Nivell 2 */
// Exercici 1
function printWithTemplateStrings(name, surname) {
  console.log(`${name} ${surname}`)
}
const name = 'Víctor'
const surname = 'Romero'
printWithTemplateStrings(name, surname) //output: 'Víctor Romero'

// Exercici 2
function invokeWithTemplateStrings(str, name, surname) {
  console.log(`${name} ${surname}`)
}
invokeWithTemplateStrings`${name} ${surname}` //output: 'Víctor Romero'

/* Nivell 3 */
// Exercici 1
function printFromZeroToNine () {
  console.log('\nImprimint llista del 0 al 9:')
  for (let i = 0; i < 10; i++) {
    console.log(i)
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
})('Víctor Romero') // output: Víctor Romero.