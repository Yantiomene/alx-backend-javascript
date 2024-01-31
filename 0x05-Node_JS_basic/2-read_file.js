const fs = require('fs');

function countStudents(filePath) {
  let numStud = 0;
  const students = {};
  const fields = {};

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
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
    console.log(`Number of students: ${numStud - 1}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
