const fs = require('fs');
const _ = require('underscore');

class Storage {
  loadLocalDataBase() {
    return JSON.parse(fs.readFileSync('storage/database.json', 'utf8'));
  }

  setData(key, data) {
    let store = this.loadLocalDataBase();

    store = {
      ...store,
      [key]: data
    };

    fs.writeFileSync(
      'storage/database.json',
      JSON.stringify(store),
      err => err && console.log(err)
    );
  }

  updatePlayer(player) {
    const { players } = this.loadLocalDataBase();

    const playerIndex = _.findIndex(players, { playerId: player.playerId });

    const playersMutate = _.map(players, p => ({
      ...p,
      lastPlayer: false
    }));

    playersMutate[playerIndex] = player;

    this.setData('players', playersMutate);

    return playersMutate;
  }

  getAllData() {
    return this.loadLocalDataBase();
  }

  resetData() {
    fs.writeFileSync(
      'storage/database.json',
      JSON.stringify({}),
      err => err && console.log(err)
    );

    return this.loadLocalDataBase();
  }
}

module.exports = Storage;
