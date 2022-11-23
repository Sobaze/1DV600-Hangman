
/**
 * Module for highscore
 * 
 * @author Jonas Nilsson
 * @version 1.0.0
 */
'use strict'

const fs = require('fs')
const path = require('path')

class Highscore {
    constructor () {
        this.points = []
        this.scoreData = process.argv.slice(4).toString() || path.join('./data/', 'highscores.json')
    }
    async showHighscores(json) {
        fs.readFile(this.scoreData, async (error, data) => {
            if (error) {
                console.log(error.message)
            }
            let json = await JSON.parse(data)

            const highScoreList = json.sort((a, b) => a.points - b.points)

            
            let savings = await this.stringHighscore(highScoreList)
            savings.map(save => console.log(save))
        })
    }

    stringHighscore(highScoreList) {
        const save = []
        let counter = 1
        highScoreList.map(obj => {
            save.push(`${counter} ${obj.name} with the score of: ${obj.points}`)
            counter++
        })
        return save
    }
    async updatingJsonSends (json, username, guesses) {
        this.points = []
        json.map(obj => this.points.push(parseFloat(obj.points)))
         let highscoreObj = { 'name': username, 'points': guesses }

         json.splice(4)
         json.push(highscoreObj)
         return json
    }

    async checkScoreList (username, guesses) {
        fs.readFile(this.scoreData, async (error, data) => {
            if (error) {
                console.log(error.message)
            }
            let json = await JSON.parse(data)
            if (json.length < 5) {
                this.updateScoreList(username, guesses)
            } else {
                json = await this.updatingJsonSends(json, username, guesses)
                 fs.writeFile(this.scoreData, JSON.stringify(json), error => {
                     if (error) {
                         console.log(error)
                     }
                 })
            }
        })
    }
    async updateScoreList(username, guesses) {
        fs.readFile(this.scoreData, async (error, data) => {
            if (error) {
                console.log(error)
            }
            let json = await JSON.parse(data)
            let userScore = await this.scoreToAdd(json, username, guesses)
            await fs.writeFile(this.scoreData, JSON.stringify(userScore), error => {
                if (error) {
                    console.log(error)
                }
            })
        })
    }
    async scoreToAdd(json, username, guesses) {
        let highscoreObj = { 'name': username, 'points': guesses}
        json.push(highscoreObj)
        return json
    }
}

module.exports.Highscore = Highscore