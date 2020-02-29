const Store = require('./../../../store/index');

module.exports = class Table extends Store {
  constructor() {
    super();
    this.table = [];
  }

  addDominoToTable(player, game) {
    this.table = [
      ...this.table,
      {
        player,
        game
      }
    ];

    return this.table;
  }

  getTableInfo() {
    return this.table;
  }
};
