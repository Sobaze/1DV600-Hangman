const { WordGenerator } = require('./wordgenerator.js')
const {Prompters} = require('./prompters')
const { Highscore } = require('./highscore.js')
const chalk = require('chalk')
const  drawHangman  = require('./drawHangman.js')



/**
 * @class Hangman represents the game for hangman
 */

 class Hangman {
     constructor() {
         this.gameWord = new WordGenerator()
         this.gamePrompts = new Prompters()
         this.highScoreShower = new Highscore()
         this.username = ''
         this.letterArray = 'abcdefghijklmnopqrstuvwxyz'
         this.lettersGuessed = []
         this.remainingGuesses = 9
         this.response = false
         this.countErrors = 0
         this.guesses = 0
        }
    

        async welcomeUser() {
           this.username = await this.gamePrompts.usernameOption()
           if (this.username) {
               console.log(chalk.green(`n\n Greetings ${this.username}! \n`))
           } else {
               console.log(chalk.bgRedBright('\nYou have to write a username'))
               return this.welcomeUser()
           }
        }

        async hangmanMenu () {
            this.fullReset()
            if (this.username === '') {
                await this.welcomeUser()
            }
            console.clear()

            
            await this.gamePrompts.hangmanMenu()
            
            if (this.gamePrompts.menu === 'Play game') {
                 this.startGame()
            } else if (this.gamePrompts.menu === 'High score') {
               await this.highScoreShower.showHighscores()
            } else if (this.gamePrompts.menu === 'Quit game') {
                await this.endGameFromMenu()
            } 
        }
        
        /**
         * Starts a game of hangman
         */
        startGame() {
            this.fullReset()
            this.requireCapitalWord = false
         if(this.requireCapitalWord === false) {
            let pickRandomword = Math.floor(Math.random() * this.gameWord.capitals.length)
            this.wordToGuess = this.gameWord.getWord(pickRandomword)
            
            this.requireCapitalWord = false
            drawHangman.stepsForTheHangman(0)
            console.log(this.gameWord.lineArray.join(' '))
            this.guessWord()
        }
    }
    
    async guessWord () {
        
        console.log(`Guess the European capital! If you want to exit the game write ".exit"`)

        await this.gamePrompts.promptLetter()

        this.guessValue(this.gamePrompts.letter)
        let cLog = `\n${this.gameWord.lineArray.join(' ')} \n User: ${this.username} \n
         Guesses left: ${this.remainingGuesses} \n Letters guessed: ${this.lettersGuessed}`


        drawHangman.stepsForTheHangman(this.countErrors)
        console.log(cLog)
        await this.gameStatus()
     }

        guessValue (letter) {   
        if (letter === '.exit') {
            console.clear()
           this.quitGame()
        } else if (!letter.match(/[A-Z]/ig)) {
             console.clear()
             console.log(chalk.bold.red('You can only guess on the letters from A-Z, please try again'))
         } else if (this.lettersGuessed.includes(letter)) {
             console.clear()
             console.log(`You have already guessed: "${letter}"`)
         }  else if (this.wordToGuess.includes(letter)) {
             console.clear()
             if (letter === this.wordToGuess) {
                 this.gameWord.lineArray = [letter]
             } 
             this.lettersGuessed.push(letter)
             let regex = new RegExp(`${letter}`, `ig`)
             let match = null
             while ((match = regex.exec(this.wordToGuess)) !== null) {
                 this.gameWord.lineArray[match.index] = letter
             }
         } else {
             console.clear()
             this.lettersGuessed.push(letter)
             this.remainingGuesses--
             this.countErrors++
             this.guesses++
         }
     }

     async gameStatus () {
         if (this.gameWord.lineArray.indexOf('_') === -1){
            console.log(chalk.bold.greenBright(`You guessed "${this.wordToGuess}" which was the correct capital ! You won!!`))
            await this.highScoreShower.checkScoreList(this.username, this.guesses)
             await this.gameChoice()
         } else if (this.remainingGuesses === 0) {
             console.log(chalk.bold.yellow(`The capital was "${this.wordToGuess}"`))
            console.log(chalk.bold.bgRedBright(`You got hanged! Game Over`))

             this.gameChoice()
         } else {
             this.guessWord()
         }
     }

    async gameChoice() {
         await this.gamePrompts.gameAlternative()
         if (this.gamePrompts.gameChoice === 'Playing again?') {
             console.clear()
            this.startGame()
         } else if (this.gamePrompts.gameChoice === 'Quitting game?') {
            this.quitGame()
         }
     }
    
     async quitGame () {
         console.clear()
         await this.gamePrompts.promptQuitGame()
         if (this.gamePrompts.quit === 'Yes') {

             console.log('Quitting the game, see you next time!')
             
             process.exit(0)
         } else {
             this.gameChoice()
         }
         
        }
        async endGameFromMenu() {
            console.clear()
            await this.gamePrompts.promptQuitGame()
            if (this.gamePrompts.quit === 'Yes') {
                console.log('Quitting the game, see you next time!')
                process.exit(0)
            } else {
                this.hangmanMenu()
            }
        }

        fullReset () {
            this.remainingGuesses = 9
            this.lettersGuessed = []
            this.wordToGuess = ''
            this.gameWord.lineArray = []
            this.countErrors = 0
        }
     
failingTest (evenNumber) {
    if (evenNumber % 2 === 1) {
        return false
    } else {
        return true
    }
  }
  
 }

 module.exports.Hangman = Hangman
