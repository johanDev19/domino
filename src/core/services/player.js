const Store = require('./../../../store/Store');

module.exports = class Player extends Store {
  distributeDominos() {
    const numberOfPlayers = 4;
    let currentPlayer = 0;
    const players = this.store.players || [];
    const dominosPerPlayer = this.store.shuffledDominos.length / numberOfPlayers;
    const mutateDominos = [...this.store.shuffledDominos];

    while (players.length < 4 && currentPlayer < numberOfPlayers) {
      players.push({
        playerId: currentPlayer,
        playerName: `player ${currentPlayer}`,
        dominos: mutateDominos.splice(0, dominosPerPlayer)
      });

      currentPlayer++;
    }

    this.setData('players', players);
    return this.store.players;
  }

  findPlayerWithDobleSix() {
    return this.store.players.filter(player =>
      player.dominos.toString().includes('6,6')
    )[0];
  }
};
