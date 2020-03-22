const _ = require('underscore');

function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}

function findPlayerWithDobleSix(players) {
  const playerWithDobleSix = players.map((player, index, arr) => {
    const dobleSix = _.findWhere(player.dominos, { left: 6, right: 6 });
    if (dobleSix) {
      return arr[index];
    }
  });

  return playerWithDobleSix.filter(v => v)[0];
}

function extractDomino(player, dominoToPlay) {
  const result = player.dominos.reduce((acc, curr) => {
    if (curr.left === dominoToPlay.left && curr.right === dominoToPlay.right) {
      return [...acc];
    }

    return [...acc, curr];
  }, []);

  return result;
}

function findAvailableDominosToPlay(players, table) {
  const allDominosNotPlayed = players.dominos.filter(
    domino => domino.played === false
  );

  const lastDominoPlayed = _.last(table.games);
  const availableLeft = _.where(allDominosNotPlayed, {
    left: lastDominoPlayed.left
  });
  const availableRight = _.where(allDominosNotPlayed, {
    right: lastDominoPlayed.right
  });
  const allAvailableDominos = [
    ...new Set([...availableLeft, ...availableRight])
  ];

  return allAvailableDominos;
}

function canPlayThisDomino(domino, availableDominos) {
  return !!_.findWhere(availableDominos, domino);
}

module.exports = {
  getRandomInt,
  findPlayerWithDobleSix,
  extractDomino,
  findAvailableDominosToPlay,
  canPlayThisDomino
};
