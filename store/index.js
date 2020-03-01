const fs = require('fs');

class Data {
  constructor() {
    this.store = {};

    this.store = this.loadLocalDataBase();
  }

  loadLocalDataBase() {
    const data = fs.readFileSync('store/database.json');
    return JSON.parse(data);
  }

  resetDataBase() {
    const store = {};
    
    fs.writeFile(
      'store/database.json',
      JSON.stringify(store),
      err => err && console.log(err)
    );
  }

  setData(key, data) {
    let store = this.store;
    store = {
      ...store,
      [key]: data
    };

    this.store = store;

    fs.writeFile(
      'store/database.json',
      JSON.stringify(store),
      err => err && console.log(err)
    );
  }
}

module.exports = Data;
