/**
 * Module for a failing test
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */


const { Hangman } = require('../src/hangman')

const failTest = new Hangman()

test('Should return true if an even number', () => {
    const evenNumber = failTest.failingTest(3)
    expect(evenNumber).toEqual(true)
})
