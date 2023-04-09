const randomId = (idChar, range) => `${idChar}${Math.floor(Math.random() * range) + 1}`;

module.exports = {
  randomId,
};
