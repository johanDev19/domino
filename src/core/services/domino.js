const Store = require('./../../../store/Store');
const utils = require('./../../../utils/global');

module.exports = class Domino extends Store {
  constructor() {
    super();

    this.generateDominos();
    this.shuffleDominos();
  }

  generateDominos() {
    const dominos = [];
    let startDominoNumber = 6;
    let currenDominoNumber = 0;
    const maxNumberOfDominos = 28;

    while (dominos.length < maxNumberOfDominos) {
      if (currenDominoNumber > startDominoNumber) {
        currenDominoNumber = 0;
        startDominoNumber -= 1;
      }

      dominos.push({
        left: startDominoNumber,
        right: currenDominoNumber,
        played: false
      });

      currenDominoNumber += 1;
    }

    this.setData('dominos', dominos);
    return this.dominos;
  }

  shuffleDominos() {
    let len = this.getAllData().dominos.length;
    const dominosIndexRead = [];
    const shuffledDominos = [];

    while (len > 0) {
      const currentDominoIndex = utils.getRandomInt(this.getAllData().dominos);

      if (!dominosIndexRead.includes(currentDominoIndex)) {
        shuffledDominos.push(this.getAllData().dominos[currentDominoIndex]);
        dominosIndexRead.push(currentDominoIndex);
        len -= 1;
      }
    }

    this.setData('shuffledDominos', shuffledDominos);
    return shuffledDominos;
  }
};
