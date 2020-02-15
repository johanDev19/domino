module.exports = class Table {
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

  getTableInfo() {
    return this.table;
  }
  
}