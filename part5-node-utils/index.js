/**************************************************************************/
/******************************** NIVELL 1 ********************************/
/**************************************************************************/
/*
const fsPromises = require('fs/promises')

// Exercici 1
// Imprimeix recursivament un missatge per consola amb demores d'un segon.
function printMessageEverySecond(message) {
  console.log(message)
  global.setTimeout(()=> {
    printMessageEverySecond(message)
  }, 1000)
}
printMessageEverySecond('N1-E1: Printing this message every second')

// Exercici 2
// Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.
const writerFn = async (output, content) => {
  await fsPromises.writeFile(output, content)
  console.log(`N1-E2: File ${output} created`)
  return output
}

// Exercici 3
// Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.
const readerFn = async (path) => {
  console.log(`N1-E3: Reading... ${path}`)
  const content = await fsPromises.readFile(path)
  return content.toString()
}

(async () => {
  const outputFile = await writerFn('notes.md', 'Victor Romero')
  const content = await readerFn(outputFile)
  console.log(`N1-E3: file: ${outputFile} content: ${content}`)
})()
*/
/**************************************************************************/
/******************************** NIVELL 2 ********************************/
/**************************************************************************/
/*
const cp = require('child_process')
const fs = require('fs')
const zlib = require('zlib')
const { pipeline } = require('stream')
const { promisify } = require('util')
const pipe = promisify(pipeline)

// Part1
// Creu una funció que comprimeixi el file del nivell 1
const compress = async (entryFile) => {
  const gzip = zlib.createGzip()
  const source = fs.createReadStream(entryFile)
  const outputFile = fs.createWriteStream(`${entryFile}.gz`)
  await pipe(source, gzip, outputFile)
}
compress('notes.md')
  .catch(err => {
    console.log(err)
    process.exitCode = 1
  })

// Part2
// Creu una funció que llisti per consola el contingut 
// del directori d'usuari. Utilitzi node Child Processes.
cp.exec('dir', (err, stdout, stderr) => {
  console.log('Printing the result of "dir"')
  console.log(stdout)
})
*/

/**************************************************************************/
/******************************** NIVELL 3 ********************************/
/**************************************************************************/
/*
// Part1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 
// respectivament, a partir del fitxer de l'exercici inicial.
const fsPromises = require('fs/promises')

const convertTo = async (path, output, encoding = 'utf8') => {
  const content = await fsPromises.readFile(path)
  const newContent = content.toString(encoding)
  fsPromises.writeFile(output, newContent)
  return newContent
} 

convertTo('notes.md', 'notesHex.md', 'hex')
convertTo('notes.md', 'notesBase64.md', 'base64')
*/
/*
// Part 2
// Crea una funció que guardi en disc els fitxers del punt anterior encriptats 
// amb algorisme aes-192-cbc, i esborri els fitxers inicials.
const fs = require('fs')
const fsPromises = require('fs/promises')
const crypto = require('crypto')

const hexKey = 'f01677a424e9ef52d7e48fff42c058773ef0e091d73557a1'
const key = Buffer.from(hexKey,'hex')
const iv = Buffer.alloc(16, hexKey, 'hex')

const removeFiles = (path) => {
  fsPromises.rm(path)
}

const encrypt = (algorithm, entryFile) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  const source = fs.createReadStream(entryFile)
  const output = fs.createWriteStream(`${entryFile}.enc`)
  source
    .pipe(cipher)
    .pipe(output)
  removeFiles(entryFile)
}

encrypt('aes-192-cbc', 'notesHex.md')
encrypt('aes-192-cbc', 'notesBase64.md')
*/


// Part 3
// Creu una altra funció que desencripti i descodifiqui els fitxers 
// finals tornant a generar els inicials.
const fs = require('fs')
const fsPromises = require('fs/promises')
const crypto = require('crypto')

const hexKey = 'f01677a424e9ef52d7e48fff42c058773ef0e091d73557a1'
const key = Buffer.from(hexKey,'hex')
const iv = Buffer.alloc(16, hexKey, 'hex')

const removeFiles = (path) => {
  fsPromises.rm(path)
}

const decrypt = async (algorithm, entryFile) => {
  const outputFile = entryFile.slice(0,-4)
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  const source = fs.createReadStream(entryFile)
  const output = fs.createWriteStream(outputFile)
  source
  .pipe(decipher)
  .pipe(output)
  removeFiles(entryFile)
}

decrypt('aes-192-cbc', 'notesHex.md.enc')
decrypt('aes-192-cbc', 'notesBase64.md.enc')
