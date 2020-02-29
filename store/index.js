const fs = require('fs');

class Data {
  constructor() {
    const data = fs.readFileSync(`${__dirname}/dataTemplate.json`);
    this.store = JSON.parse(data);
  }

  setData(key, data) {
    this.store[key] = data;
  }
}

module.exports = Data;
