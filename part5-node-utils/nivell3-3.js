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

const decrypt = (algorithm, entryFile) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  const source = fs.createReadStream(entryFile)
  const output = fs.createWriteStream(entryFile.slice(0,-4))
  source
    .pipe(decipher)
    .pipe(output)
  removeFiles(entryFile)
}

decrypt('aes-192-cbc', 'notesHex.md.enc')
decrypt('aes-192-cbc', 'notesBase64.md.enc')