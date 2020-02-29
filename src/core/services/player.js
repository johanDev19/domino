const Store = require('./../../../store/index');

module.exports = class Player extends Store {
  constructor() {
    super();

    this.numberOfPlayers = 4;
    this.players = [];
  }

  distributeDominos() {
    let currentPlayer = 0;
    const dominosPerPlayer = this.shuffledDominos.length / this.numberOfPlayers;
    const mutateDominos = [...this.shuffledDominos];

    while (currentPlayer < this.numberOfPlayers) {
      this.players.push({
        playerId: currentPlayer,
        playerName: `player ${currentPlayer}`,
        dominos: mutateDominos.splice(0, dominosPerPlayer)
      });

      currentPlayer++;
    }

    return this.players;
  }

  findPlayerWithDobleSix() {
    return this.players.filter(player =>
      player.dominos.toString().includes('6,6')
    )[0];
  }
};
