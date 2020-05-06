const fs = require('fs')
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON= dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.title = "Hello"
console.log(data.title)
const newBookJSON = JSON.stringify(data)
console.log(newBookJSON)
fs.writeFileSync('1-json.json', newBookJSON)