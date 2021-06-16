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