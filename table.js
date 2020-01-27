const Player = require('./player');

module.exports = class extends Player {
  constructor(){
    super();

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