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

