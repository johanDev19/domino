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

function findTheNextPlayer(table, players) {
  const maxIndexOfPlayer = 3;
  const { lastPlayerId } = table;
  const lastPlayerIndex = _.findIndex(players, { playerId: lastPlayerId });

  if (lastPlayerIndex === maxIndexOfPlayer) {
    return players[0];
  }

  return players[lastPlayerIndex + 1];
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
    left: lastDominoPlayed ? lastDominoPlayed.left : 6
  });
  const availableRight = _.where(allDominosNotPlayed, {
    right: lastDominoPlayed ? lastDominoPlayed.right : 6
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
  canPlayThisDomino,
  findTheNextPlayer
};
