/**
 * Module for testing highscores
 * @author Sobaze Nilsson
 * @version 1.0.0
 */
'use strict'

const { Highscore } = require('../src/highscore')

const testScore = new Highscore()

test('Should return the array sorted by points, lowest first [{name: Sobaze, points: 5}, {name: Logan, points: 6}, {name:Per, points: 10} ]', async () => {
let taking = [{ 'name': 'Per', 'points': 10},{'name': 'Sobaze', 'points': 5},{'name': 'Logan', 'points': 6 }]
let expected = [{'name': 'Sobaze', 'points': 5}, {'name': 'Logan', 'points': 6}, {'name':'Per', 'points': 10}]

let actual = testScore.showHighscores(taking)

expect(actual).toEqual(expected)
})

test(`Should return "['1 Jonas with the score of: 5', '2 Erik with the score of: 6']"`, async () => {
    let taking = [ {'name': 'Jonas', 'points': 5}, {'name': 'Erik', 'points': 6}]

    let expected = [`1 Jonas with the score of: 5`, `2 Erik with the score of: 6`,]
    let actual = testScore.stringHighscore(taking)
    expect(actual).toEqual(expected)
})
