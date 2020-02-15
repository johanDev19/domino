const Table = require('./table');
const utils = require('./../../../utils/global');

module.exports = class Domino extends Table {
  
  constructor() {
    super();
    this.dominos = [];
    this.shuffledDominos = []
    this.maxNumberOfDominos = 28;
    this.startDominoNumber = 6;
    this.currenDominoNumber = 0;


    this.generateDominos();
    this.shuffleDominos();
  }

  generateDominos() {
    while (this.dominos.length < this.maxNumberOfDominos) {
      if (this.currenDominoNumber > this.startDominoNumber) {
        this.currenDominoNumber = 0;
        this.startDominoNumber--;
      }
    
      this.dominos.push([this.startDominoNumber, this.currenDominoNumber]);
      this.currenDominoNumber++;
    }

    console.log('Dominos created');
    return this.dominos;
  }

  shuffleDominos() {
    let len = this.dominos.length;
    const dominosIndexRead = [];
    this.shuffledDominos = [];

    while (len > 0) {
      let currentDominoIndex = utils().getRandomInt(this.dominos);

      if(!dominosIndexRead.includes(currentDominoIndex)) {
        this.shuffledDominos.push(this.dominos[currentDominoIndex]);
        dominosIndexRead.push(currentDominoIndex)
        len--;
      }
    }
    
    console.log('Dominos shuffled');
    return this.shuffledDominos;
  }
}