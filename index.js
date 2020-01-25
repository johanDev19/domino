const dominos = [];
const players = [];
const maxNumberOfDominos = 28;
const numberOfPlayers = 4;

let startDominoNumber = 6;
let currenDominoNumber = 0;

while (dominos.length < maxNumberOfDominos) {
  if (currenDominoNumber > startDominoNumber) {
    currenDominoNumber = 0;
    startDominoNumber--;
  }

  dominos.push([startDominoNumber, currenDominoNumber]);
  currenDominoNumber++;
}

console.log(dominos)