const Store = require('./../../../store/index');
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
        startDominoNumber--;
      }

      dominos.push([startDominoNumber, currenDominoNumber]);
      currenDominoNumber++;
    }

    this.setData('dominos', dominos);
    return this.dominos;
  }

  shuffleDominos() {
    let len = this.store.dominos.length;
    const dominosIndexRead = [];
    const shuffledDominos = [];

    while (len > 0) {
      const currentDominoIndex = utils().getRandomInt(this.store.dominos);

      if (!dominosIndexRead.includes(currentDominoIndex)) {
        shuffledDominos.push(this.store.dominos[currentDominoIndex]);
        dominosIndexRead.push(currentDominoIndex);
        len--;
      }
    }

    this.setData('shuffledDominos', shuffledDominos);
    return shuffledDominos;
  }
};
