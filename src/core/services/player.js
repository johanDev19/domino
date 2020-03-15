const Store = require('./../../../store/Store');
const utils = require('./../../../utils/global');

module.exports = class Player extends Store {
  distributeDominos() {
    const numberOfPlayers = 4;
    let currentPlayer = 0;
    const players = [];
    const dominosPerPlayer =
      this.getAllData().shuffledDominos.length / numberOfPlayers;
    const mutateDominos = [...this.getAllData().shuffledDominos];

    while (players.length < 4 && currentPlayer < numberOfPlayers) {
      players.push({
        playerId: currentPlayer,
        playerName: `player ${currentPlayer}`,
        dominos: mutateDominos.splice(0, dominosPerPlayer),
        lastPlayer: false
      });

      currentPlayer += 1;
    }

    this.setData('players', players);
    return this.getAllData().players;
  }

  findPlayerWithDobleSix() {
    const { players } = this.getAllData();

    return utils.findPlayerWithDobleSix(players);
  }
};
