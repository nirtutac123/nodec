// cd notes-app (to run any folder that is inside of a folder)
// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Niruta! ')

// fs.appendFileSync('notes.txt', 'And i live in Lalitpur');
 
// const add = require('./utils.js')
// // const name = 'Niruta'
// const sum = add(4, -2)
// console.log(sum) 
// const validator = require('validator')

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// const command = process.argv[2]

// console.log(process.argv)

//(customize yargs versiom)
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function() {
        console.log("Adding a new note!")
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Resolve a note",
    handler: function() {
        console.log("Removing the note!")
    }
})
//(add, remove, read, list)

yargs.command({
    command: "list",
    describe: "Adding the things",
    handler: function() {
        console.log("Adding to the list!")
    }
})

yargs.command({
    command: "read",
    describe: "Reading the information",
    handler: function() {
        console.log("Reading the note!")
    }
})

console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note!')

// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// const msg = getNotes()

// console.log(msg) 


// const greenMsg = chalk.blue.inverse.bold("Failure!")
// console.log(greenMsg)


// console.log(process.aggv[])
// console.log(validator.isURL('https:/mead.io'))
//to terminate any program in terminal - ctrl + C
