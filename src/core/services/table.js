const Store = require('./../../../store/Store');

module.exports = class Table extends Store {
  constructor() {
    super();

    this.loadTable();
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
    return this.loadLocalDataBase().table;
  }

  loadTable() {
    return this.setData('table', {
      games: [],
      status: 'active',
      lastPlayerId: 0,
      points: 0
    });
  }
};
