const fs = require('fs');

class Store {
  constructor() {
    this.store = {};

    this.store = {};
  }

  loadLocalDataBase() {
    const data = JSON.parse(fs.readFileSync('store/database.json', 'utf8'));
    return data;
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
}

module.exports = Store;
