/**************************************************************************/
/******************************** NIVELL 1 ********************************/
/**************************************************************************/

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
  const outputFile = await writerFn('N1file.txt', 'Víctor Romero')
  const content = await readerFn(outputFile)
  console.log(`N1-E3: file: ${outputFile} content: ${content}`)
})()

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
compress('N1file.txt')
  .catch(err => {
    console.log(err)
    process.exitCode = 1
  })

// Part2
// Creu una funció que llisti per consola el contingut 
// del directori d'usuari. Utilitzi node Child Processes.
cp.exec('dir c:\\Users', (err, stdout, stderr) => {
  console.log('Printing the result of "dir"')
  console.log(stdout)
})
*/

/**************************************************************************/
/******************************** NIVELL 3 ********************************/
/**************************************************************************/

/******************************** PART 1 **********************************/
/*
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 
// respectivament, a partir del fitxer de l'exercici inicial.

const fsPromises = require('fs/promises')

const convertTo = (from, to) => async (inputFile, outputFile) => {
  const content = await fsPromises.readFile(inputFile)
  const buffer = Buffer.from(content.toString(), from)
  const newContent = buffer.toString(to)
  fsPromises.writeFile(outputFile, newContent)
} 

const utf8ToHex = convertTo('utf8', 'hex')
const utf8ToBase64 = convertTo('utf8', 'base64')

utf8ToHex('N1file.txt', 'N3fileHex.txt')
utf8ToBase64('N1file.txt', 'N3fileBase64.txt')
*/

/******************************** PART 2 **********************************/
/*
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

encrypt('aes-192-cbc', 'N3fileHex.txt')
encrypt('aes-192-cbc', 'N3fileBase64.txt')
*/

/******************************** PART 3 **********************************/
/*
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

const decrypt = (algorithm, entryFile, encoding = 'utf-8') => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  const source = fs.createReadStream(entryFile)
  const chunks = []
  source
    .pipe(decipher)
    .on("data", (chunk) => chunks.push(chunk))
    .on("end", () => {
      const newContent = Buffer.from(Buffer.concat(chunks).toString(), encoding)
      fsPromises.writeFile(`N3decryptedFile${encoding}.txt`, newContent.toString())
    })
  removeFiles(entryFile)
}

decrypt('aes-192-cbc', 'N3fileHex.txt.enc', 'hex')
decrypt('aes-192-cbc', 'N3fileBase64.txt.enc', 'base64')
*/