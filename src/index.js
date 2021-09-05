const fs = require('fs')
const path = require('path')
const jdenticon = require('jdenticon')

const wordlist = require('./bip39-wordlist')

const size = 3240
const extension = 'png'

for (let index = 0; index < wordlist.length; index++) {
  const word = wordlist[index]
  const image = jdenticon.toPng(word, size)
  fs.writeFileSync(path.resolve(`./outputs/${word}.${extension}`), image)
  console.log(`${index + 1}. ${word}`)
}
