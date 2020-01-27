module.exports = () => {
  function getRandomInt(array) {
    return Math.floor(Math.random() * array.length);
  }


  return {
    getRandomInt
  }
}