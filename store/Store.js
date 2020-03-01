const fs = require('fs');

class Store {
  constructor() {
    this.store = this.loadLocalDataBase();
  }

  loadLocalDataBase() {
    return JSON.parse(fs.readFileSync('store/database.json', 'utf8'));
  }

  setData(key, data) {
    let store = this.store;

    store = {
      ...store,
      [key]: data
    };

    this.store = store;

    fs.writeFileSync(
      'store/database.json',
      JSON.stringify(this.store),
      err => err && console.log(err)
    );
  }

  getAllData() {
    return this.loadLocalDataBase();
  }
}

module.exports = Store;
