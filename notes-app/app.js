

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')



yargs.version('1.1.0')


//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler() { 

        console.log('reading note')
    }
})
//list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)

//add, remove, read, list
