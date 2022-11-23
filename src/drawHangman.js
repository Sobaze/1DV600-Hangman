/**
 * Module for drawing the hangmang picture
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */
'use strict'


    function stepsForTheHangman (amountOfIncorrectAnswers) {
        const chalk = require('chalk')
        const hangmanProgress = [
            
            `
            |
            |
            |
            |
            |
            |
            |__ ___ ___ ___
             `,
             `
            __________
            |
            |
            |
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /
            |/
            |
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/
            |
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |        |
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |       /|
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |       /|\\
            |
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |       /|\\
            |       /
            |
            |
            |__ ___ ___ ___
              `,
              `
            __________
            | /      |
            |/       O
            |       /|\\
            |       / \\
            |
            |
            |__ ___ ___ ___
              `,
        ]
        console.log(chalk.red(hangmanProgress[amountOfIncorrectAnswers]))
    }


module.exports.stepsForTheHangman = stepsForTheHangman
