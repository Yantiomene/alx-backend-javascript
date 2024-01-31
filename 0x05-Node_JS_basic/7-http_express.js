const { readFile } = require('fs');
const express = require('express');

const app = express();
const PORT = 1245;

function countStudents(filePath) {
  let numStud = 0;
  const students = {};
  const fields = {};

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            numStud += 1;
            const row = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, row[3])) {
              students[row[3]].push(row[0]);
            } else {
              students[row[3]] = [row[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, row[3])) {
              fields[row[3]] += 1;
            } else {
              fields[row[3]] = 1;
            }
          }
        }
        output += `Number of students: ${numStud - 1}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            output += `Number of students in ${k}: ${v}. List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    result = 'This is the list of our students\n' + output;
      res.send(result.slice(0, -1));
  }).catch(() => {
    res.send('Cannot load the database');
  });
});

app.listen(PORT, () => {
});

module.exports = app;
