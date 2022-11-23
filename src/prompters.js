/**
 * Module for prompts
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */
'use strict'

class Prompters {
    constructor() {
        this.prompts = require('prompts')
        this.letterForWord = ''
        this.gameChoice = ''
        this.quit = ''
        this.menu = ''
    }



    async usernameOption() {
        let username = await this.prompts({
            type:'text',
            message: 'Please type an username',
            name: 'value'
        })
        this.username = username.value
        return username.value
    }

    async hangmanMenu () {
        let menu = await this.prompts({
            type: 'select',
            message: 'Welcome to Hangman! Hope you have a fun time! ',
            name: 'value',
            choices: [
                { title: 'Play game', value: 'Play game' },
                { title: 'High score', value: 'High score' }, 
                { title: 'Quit game', value: 'Quit game' }
            ],
            initial: 0
        })
        this.menu = menu.value
        return menu.value
    }

    async promptLetter () {
        let letter = await this.prompts({
            type: 'text',
            message: 'Enter a letter',
            name: 'value'
        })
        this.letter = letter.value
        return letter.value
    }

    async gameAlternative () {
        let gameChoice = await this.prompts({
            type: 'select',
            name: 'value',
            message: 'Are you interested in ',
            choices: [
                { title: 'Playing again?', value: 'Playing again?' },
                { title: 'Quitting Game?', value: 'Quitting game?' }
            ],
            initial: 0
        })
        this.gameChoice = gameChoice.value
        return gameChoice.value
    }
    async promptQuitGame () {
        let quit = await this.prompts({
            type: 'select',
            name: 'value',
            message: 'Do you really want to quit?',
            choices: [
                {title: 'Yes', value: 'Yes'},
                {title: 'No', value: 'No'}
            ],
            initial: 0
        })
        this.quit = quit.value
        return quit.value
    }
}


module.exports.Prompters = Prompters
