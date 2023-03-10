const fs = require('fs')
const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('process')


//add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)

    }
})

//remove command
yargs.command({
    command: 'remove',
    description: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    description: 'list a new note',
    handler() {
        notes.listNote()
    }
})

//read command
yargs.command({
    command: 'read',
    description: 'read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()