const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const database = [];

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          const entry = {};

          for (let j = 0; j < headers.length; j++) {
            entry[headers[j].toLowerCase()] = values[j];
          }

          database.push(entry);
        }

        resolve(database);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = { readDatabase };
