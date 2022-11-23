/**
 * @class WordGenerator represents a class that will generate some random words for us
 */

const path = require('path')

class WordGenerator {
    constructor () {

       // array with the words
       this.capitals = require(process.argv.slice(2).toString() || path.join('../data/', 'capital.json'))
       
       this.lineArray = []
    }

    getWord (index) {
        this.capital = ''
        
        let randomCapital = this.capitals[index]
        
        this.capital = randomCapital.word.toLowerCase()
        
        
        this.generateWord()
        return this.capital
    }

    /**
     * generates a word that will be the played one for the game
     */
    generateWord () {
        
       for (let i = 0; i < this.capital.length; i++) {
           this.lineArray.push('_')
       }
       return this.lineArray
    }
}

module.exports.WordGenerator = WordGenerator
