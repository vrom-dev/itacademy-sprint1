const fs = require('fs');

/* Nivell 1 */
// Exercici 1
function printMessageEverySecond(message) {
  global.setInterval(()=> {
    console.log(message)
  }, 1000)
}
printMessageEverySecond('Hello World') // output(each sec.): 'Hello World'

// Exercici 2
const message = `#Exercici 2
- Creant i llegint un nou arxiu desde node.js`

function writeFile (path, msg) {
  fs.writeFile(path, msg.trim(), (err) => {
    if (err) {
      throw err
    }
    console.log('File saved!') // output: 'File saved!'
  })
}
writeFile('./notes.md', message)


// Exercici 3
function readFile (path, cb) {
  fs.readFile(path, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    cb(data) // output: 'This is a new File'
  })
}
readFile('./notes.md', console.log)

/* Nivell 2 */
function compact(path) {

}