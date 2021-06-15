/* Nivell 1 */
// Exercici 1
const twoNames = ((a, b) => a + b)(5, 27)
console.log(twoNames) // output: 32

/* Nivell 2 */
// Exercici 1
const objectCreator = (value) => {
  return {
    name: value
  }
}
console.log(objectCreator('Víctor Romero')) // output: {name: 'Vic Romero'}

// Exercici 2
class Persona {
  constructor(nom) {
    this.nom = nom
  }
  decirNombre () {
    console.log(this.nom)
  }
}
const victor = new Persona('Víctor Romero')
victor.decirNombre() // output: 'Víctor Romero'

/* Nivell 3 */
// Exercici 1
function Person (name) {
  this.name = name
  this.sayName = () => {
    console.log(this.name)
  }
}
const vic = new Person('Víctor Romero')
const dan = new Person('Dan Abramov')

vic.sayName() // output: 'Víctor Romero'
dan.sayName() // output: 'Dan Abramov'