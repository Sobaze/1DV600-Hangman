

const chalk = require('chalk')

const { Hangman } = require('./src/hangman.js')

const hangMan = new Hangman()
console.log(chalk.bold.magenta('Welcome to hangman, enter a username and please have a fun and relaxed time playing the game!'))
hangMan.hangmanMenu()
