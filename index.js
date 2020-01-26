const dominos = [];
const players = [];
let dominoTable = {
  lastPlayer: {},
  table: [],
};
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
  let dominosIndexRead = [];

  while (len) {
    let currentDominoIndex = getRandomInt(dominos);
    if(!dominosIndexRead.includes(currentDominoIndex)) {
      temp.push(array[currentDominoIndex]);
      dominosIndexRead.push(currentDominoIndex)
      len--;
    }
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
console.log('dominos per player')
console.table(players)

function findPlayerWithDobleSix(players) {
  return players.filter((player) => player.dominos.toString().includes('6,6'))[0]
}

function addDominoToTable(player, dominoIndex) {
  dominoTable = {
    ...dominoTable,
    lastPlayer: player,
    table: [...dominoTable.table, player.dominos.splice(dominoIndex,1)]
  }
}

function initGame(players, dominoTable) {
  if(dominoTable.table.length === 0) {
    const startingPlayer = findPlayerWithDobleSix(players);
    const dominoIndexToPlay = startingPlayer.dominos.map(domino => domino.toString() === '6,6').indexOf(true)
    addDominoToTable(startingPlayer, dominoIndexToPlay)
  }
}

initGame(players, dominoTable)
