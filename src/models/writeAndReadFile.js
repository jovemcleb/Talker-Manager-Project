const fs = require('fs/promises');

const read = async () => {
  try {
    const talkers = await fs.readFile('talker.json', 'utf-8');
    return JSON.parse(talkers);
  } catch (e) {
    console.log(e.message);
  }
};

const write = async (content) => {
  try {
    await fs.writeFile('talker.json', JSON.stringify(content));
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  read,
  write,
};
