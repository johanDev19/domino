const fs = require('fs');

function readFileAsync(path) {
  const data = fs.readFileSync(path);
  const gameData = JSON.parse(data);

  return gameData;
}


module.exports = {
  readFileAsync,
};
