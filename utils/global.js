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

  return playerWithDobleSix.filter(v => v);
}

function extractDomino(dominos, domino) {
  const arrayOfDominos = dominos.map(d => [...d.values]);

  const result = _.where(
    dominos.map(d => d.values),
    domino
  );

  return {};
}

module.exports = {
  getRandomInt,
  findPlayerWithDobleSix,
  extractDomino
};
