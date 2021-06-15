const fs = require('fs')
const zlib = require('zlib')
const stream = require('stream')
const cp = require('child_process')
const crypto = require('crypto')

/* Nivell 1 */
// Exercici 1
function printMessageEverySecond(message) {
  console.log(message)
  global.setTimeout(()=> {
    printMessageEverySecond(message)
  }, 1000)
}
printMessageEverySecond('Printing this message every second') // output(x1s): 'Printing this message every second'

// Exercici 2
const fullName = 'Víctor Romero'

function fileWriter (path, msg) {
  fs.writeFile(path, msg, (err) => {
    if (err) {
      throw err
    }
    console.log('File saved!') // output: 'File saved!'
  })
}
fileWriter('notes.md', fileWriter.name)


// Exercici 3
function fileReader (path, cb) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    cb(data.toString()) // output: 'Víctor Romero'
    return data
  })
}
fileReader('./notes.md', console.log)

/* Nivell 2 */
// Part 1
function compress() {
  const gzip = zlib.createGzip()
  const source = fs.createReadStream('notes.md')
  const destination = fs.createWriteStream('notes.md.gz')
  
  stream.pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err)
      process.exitCode = 1
    }
    console.log('Gzip created!') // output: 'Gzip created'
  })
}
compress()
// https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly
//Part2
cp.exec('ls -l', (err, stdout, stderr) => {
  console.log('Printing the result of "ls -l"')
  console.log(stdout)
})

const codeFiles = async (path) => {
  const buff = await fs.readFileSync(path)
  const convertedToHex = buff.toString('hex')
  const convertedToBase64 = buff.toString('base64')
  fileWriter('hex.md', convertedToHex)
  fileWriter('base64.md', convertedToBase64)
}
codeFiles('text.txt')


/* Nivell 3 */


// const secret = 'vromsecret'
// const hash = crypto.createHmac('sha256', secret)
//   .update('password')
//   .digest('hex')

//   console.log(hash)