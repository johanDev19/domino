const Domino = require('./domino');

module.exports = class Player extends Domino {
  numberOfPlayers = 4;
  players = [];

  constructor() {
    super()
  }

  distributeDominos() {
    let currentPlayer = 0;
    const dominosPerPlayer = this.shuffledDominos.length / this.numberOfPlayers;
    const mutateDominos = [...this.shuffledDominos];
    
    while(currentPlayer < this.numberOfPlayers) {
      this.players.push({
        playerId: currentPlayer,
        playerName: `player ${currentPlayer}`,
        dominos: mutateDominos.splice(0, dominosPerPlayer)
      })

      currentPlayer++
    }
    
    console.log('Dominos distributed to all players')
    return this.players;
  }

  findPlayerWithDobleSix() {
    return this.players.filter((player) => player.dominos.toString().includes('6,6'))[0]
  }
  
}