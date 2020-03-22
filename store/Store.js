const fs = require('fs');
const _ = require('underscore');

class Store {
  loadLocalDataBase() {
    return JSON.parse(fs.readFileSync('store/database.json', 'utf8'));
  }

  setData(key, data) {
    let store = this.loadLocalDataBase();

    store = {
      ...store,
      [key]: data
    };

    fs.writeFileSync(
      'store/database.json',
      JSON.stringify(store),
      err => err && console.log(err)
    );
  }

  updatePlayer(player) {
    const { players } = this.loadLocalDataBase();
    const playerIndex = _.findIndex(players, { playerId: player.playerId });
    players[playerIndex] = player;

    this.setData('players', players);

    return players;
  }

  getAllData() {
    return this.loadLocalDataBase();
  }

  resetData() {
    fs.writeFileSync(
      'store/database.json',
      JSON.stringify({}),
      err => err && console.log(err)
    );

    return this.loadLocalDataBase();
  }
}

module.exports = Store;
