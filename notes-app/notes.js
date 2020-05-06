const fs = require('fs')
const chalk = require('chalk')


const getNotes =  () => {
    return 'Your notes ...'
}

const readNotes = (title) => {
    const notes = loadNotes()

    const foundNote = notes.find((note) => note.title === title)
    if(foundNote){
        console.log(chalk.inverse(foundNote.title))
        console.log((foundNote.body))
    }
    else {
        console.log(chalk.red.inverse('Could not find note'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('My Notes\n'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title)
    //find stops when item is found and is defined else undefined
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('note added'))
    }
    else {
        console.log(chalk.red.inverse('duplicate note'))
    }

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()

    // const keepNotes = notes.filter(function (note) {
    //     return note.title !== title
    // })

    const keepNotes = notes.filter((note => note.title !== title))

    if(notes.length > keepNotes.length ) {
        console.log(chalk.green.inverse('notes removed'))
    }
    else {
        console.log(chalk.red.inverse('could not find note to remove'))
    }

    saveNotes(keepNotes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    console.log(dataJSON)
    try{
        fs.writeFileSync('notes.json', dataJSON)
    }
    catch (e) {
        console.log(chalk.red.inverse('error saving'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        //console.log(dataJSON)
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

} 

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}