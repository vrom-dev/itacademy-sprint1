const fsPromises = require('fs').promises

// Exercici 1
// Imprimeix recursivament un missatge per consola amb demores d'un segon.
function printMessageEverySecond(message) {
  console.log(message)
  global.setTimeout(()=> {
    printMessageEverySecond(message)
  }, 1000)
}
printMessageEverySecond('Printing this message every second')

// Exercici 2
// Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.
const writerFn = async (output, content) => {
  await fsPromises.writeFile(output, content)
  console.log(`File ${output} created`)
  return output
}

// Exercici 3
// Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.
const readerFn = async (path) => {
  console.log(`Reading... ${path}`)
  const content = await fsPromises.readFile(path)
  return content.toString()
}

(async () => {
  const outputFile = await writerFn('notes.md', writerFn.name)
  const content = await readerFn(outputFile)
  console.log(`file: ${outputFile} content: ${content}`)
})()