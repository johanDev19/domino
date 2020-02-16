module.exports = class Table {
  constructor() {
    this.table = [];
  }

  addDominoToTable(player, game) {
    this.table = [
      ...this.table,
      {
        player,
        game,
      },
    ];

    return this.table;
  }

  getTableInfo() {
    return this.table;
  }
};
