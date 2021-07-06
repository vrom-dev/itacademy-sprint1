/* Nivell 1 */
// Exercici 1
const sum = ((a, b) => a + b)(5, 27)
console.log(`N1-E1: ${sum}`) // output: 'N1-E1: 32'

/* Nivell 2 */
// Exercici 1
const objectCreator = (value) => {
  return {
    name: value
  }
}
console.log(objectCreator('Víctor Romero')) // output: {name: 'Víctor Romero'}

// Exercici 2
class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }
  decirNombre () {
    console.log(`N2-E2: ${this.nombre}`)
  }
}
const victor = new Persona('Víctor Romero')
victor.decirNombre() // output: 'N2-E2: Víctor Romero'

/* Nivell 3 */
// Exercici 1
// Clase abstracta
class Person {
  constructor () {
    if (this.constructor === Person) {
      throw new Error ("Person is an abstract class and can't be instantiated.")
    }
  }
  sayName () {
    console.log(`N3-E1: My name is ${this.name}`)
  }
  sayRole () {
    throw new Error ("Method 'sayRole()' has to be implemented.")
  }
}

// Funció que genera objectes a partir de la clase abstracta
function DevStudent (name, role) {
  this.name = name
  this.role = role
}

// Herencia
DevStudent.prototype = Object.create(Person.prototype)

// Implementació del métode sayRole()
DevStudent.prototype.sayRole = function () {
  console.log(`N3-E1: My role is ${this.role}`)
}

const vic = new DevStudent('Víctor Romero', 'NodeJs Dev')
const dan = new DevStudent('Dan Abramov', 'ReactJs Dev')

vic.sayName() // output: 'N3-E1: My name is Víctor Romero'
vic.sayRole() // output: 'N3-E1: My role is NodeJs Dev'
dan.sayName() // output: 'N3-E1: My name is Dan Abramov'
dan.sayRole() // output: 'N3-E1: My role is ReactJs Dev'