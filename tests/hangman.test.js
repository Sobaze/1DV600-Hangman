/**
 * Module for testing hangman
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */
'use strict'
const { Hangman } = require('../src/hangman')
const hangmanTest = new Hangman()

let outputData = ''
const storeLog = inputs => (outputData += inputs)

test('hangmanTest.guessValue should contain "a"', () => {
    let input = 'a'
    hangmanTest.wordToGuess = 'tirana'
    hangmanTest.guessValue(input)
    let expected = 'a'
    let actual = hangmanTest.lettersGuessed
    expect(actual).toContain(expected)
}) 

test('We should get a console log telling us "You have already guessed: "a"', () => { 
    console['log'] = jest.fn(storeLog)
    hangmanTest.countErrors = 0

    let input = 'a'
    hangmanTest.guessValue(input)

    let expected = (`You have already guessed: "a"`)
    expect(outputData).toBe(expected)
})
test('We should get our underline array to look like [ _ _ _ a _ a ]', () => {
    hangmanTest.lettersGuessed = []
    hangmanTest.wordToGuess = 'tirana'
    hangmanTest.gameWord.lineArray = [ '_', '_', '_', '_', '_', '_']

    let input = 'a'
    hangmanTest.guessValue(input)
    let expected = [ '_', '_', '_', 'a', '_', 'a']
    let actual = hangmanTest.gameWord.lineArray
    expect(actual).toEqual(expected)
})
