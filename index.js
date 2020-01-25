const dominos = [];
const players = [];
const maxNumberOfDominos = 28;
const numberOfPlayers = 4;

let startDominoNumber = 6;
let currenDominoNumber = 0;
let shuffledDominos;

function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}

while (dominos.length < maxNumberOfDominos) {
  if (currenDominoNumber > startDominoNumber) {
    currenDominoNumber = 0;
    startDominoNumber--;
  }

  dominos.push([startDominoNumber, currenDominoNumber]);
  currenDominoNumber++;
}

function shuffleDominos(array) {
  const temp = [];
  let len = array.length;
  while (len) {
    temp.push(array[getRandomInt(dominos)]);
    len--;
  }
  return temp;
}

function distributeDominos(dominos) {
  let currentPlayer = 0;
  const dominosPerPlayer = dominos.length / numberOfPlayers;

  while(currentPlayer < numberOfPlayers) {
    players.push({
      playerId: currentPlayer,
      playerName: `player ${currentPlayer}`,
      dominos: dominos.splice(0,dominosPerPlayer)
    })

    currentPlayer++
  }

  return players;
}

shuffleDominos = shuffleDominos(dominos);
distributeDominos(shuffleDominos);
console.table(players)
