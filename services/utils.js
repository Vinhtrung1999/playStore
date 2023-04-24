const randomId = (idChar, range) => `${idChar}${Math.floor(Math.random() * range) + 1}`;

const createFolderName = nameApp => nameApp.toLowerCase().replace(' ', '-');

module.exports = {
  randomId,
  createFolderName,
};
