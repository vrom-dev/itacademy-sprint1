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
