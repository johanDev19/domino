const Player = require('./player');

module.exports = class Player {
  constructor(){
    this.table = [];
  }

  addDominoToTable(player, game) {
    this.table = [
      ...this.table,
      {
        player: player,
        game: game,
      }
    ]

    return this.table;
  }
  
}