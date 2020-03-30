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

  const lastDominoLeft = _.first(table.games);
  const lastDominoRight = _.last(table.games);

  const availableLeft = [
    ..._.where(allDominosNotPlayed, {
      left: lastDominoLeft.left
    }),
    ..._.where(allDominosNotPlayed, {
      right: lastDominoLeft.left
    })
  ];
  const availableRight = [
    ..._.where(allDominosNotPlayed, {
      left: lastDominoRight.right
    }),
    ..._.where(allDominosNotPlayed, {
      right: lastDominoRight.right
    })
  ];

  const allAvailableDominos = {
    left: [...new Set([...availableLeft])],
    right: [...new Set([...availableRight])]
  };

  return allAvailableDominos;
}

function invertDominoValues(domino) {
  if (domino) {
    return {
      left: domino.right,
      right: domino.left,
      played: domino.played
    };
  }

  return undefined;
}

function orderDominoAccordingTheTable(domino, table, side) {
  const games = table.games;
  let matchedDomino = domino;

  if (side === 'left') {
    matchedDomino = _.first(games);
  }
  if (side === 'right') {
    matchedDomino = _.last(games);
  }

  if (matchedDomino[side] !== domino[side]) {
    return domino;
  }

  return invertDominoValues(domino);
}

function playerHasThisDomino(domino, availableDominos) {
  const dominoFound =
    invertDominoValues(_.findWhere(availableDominos, domino)) ||
    _.findWhere(availableDominos, invertDominoValues(domino));
  return dominoFound;
}

module.exports = {
  getRandomInt,
  findPlayerWithDobleSix,
  extractDomino,
  findAvailableDominosToPlay,
  playerHasThisDomino,
  findTheNextPlayer,
  invertDominoValues,
  orderDominoAccordingTheTable
};
