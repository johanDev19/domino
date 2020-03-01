const Store = require('./../../../store/Store');

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
        dominos: mutateDominos.splice(0, dominosPerPlayer)
      });

      currentPlayer += 1;
    }

    this.setData('players', players);
    return this.getAllData().players;
  }

  findPlayerWithDobleSix() {
    return this.getAllData().players.filter(player =>
      player.dominos.toString().includes('6,6')
    )[0];
  }
};
