/**
 * Module for testing wordgenerator
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */

const { WordGenerator } = require('../src/wordgenerator')
const wordTest = new WordGenerator()

// Tests method getWord
test('Should return word "tirana"', () => {
    let input = 0
    let expected = 'tirana'
    let real = wordTest.getWord(input)
    expect(real).toBe(expected)
})
test('Should return word "sarajevo"', () => {
   let input = 6
   let expected = 'sarajevo'
   let real = wordTest.getWord(input)
   expect(real).toBe(expected)
})

// Tests method generateWord
test('Should return an array of 6 underscores', () => {
   wordTest.lineArray = []
   wordTest.capital = 'tirana'

   let expected = [ '_', '_', '_', '_', '_', '_']
   let real = wordTest.generateWord()
   expect(real).toEqual(expected)
})
test('Should return an array of 8 underscores', () => {
   wordTest.lineArray = []
   wordTest.capital = 'sarajevo'

   let expected = [ '_', '_', '_', '_', '_', '_', '_', '_']
   let real = wordTest.generateWord()
   expect(real).toEqual(expected)
})
