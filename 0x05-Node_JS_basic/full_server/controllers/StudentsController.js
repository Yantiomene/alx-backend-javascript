const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('database.csv');

      if (!database || !Array.isArray(database)) {
        throw new Error('Cannot load database');
      }

      const fields = {};
      const studentsList = {};

      database.forEach((student) => {
        const field = student.field.toUpperCase();
        const firstName = student.firstname;

        fields[field] = fields[field] || 0;
        studentsList[field] = studentsList[field] || [];

        fields[field]++;
        studentsList[field].push(firstName);
      });

      const responseText = ['This is the list of our students'];

      Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((field) => {
        const count = fields[field];
        const list = studentsList[field].join(', ');

        responseText.push(`Number of students in ${field}: ${count}. List: ${list}`);
      });

      res.status(200).send(responseText.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    try {
      if (!major || (major.toUpperCase() !== 'CS' && major.toUpperCase() !== 'SWE')) {
        throw new Error('Major parameter must be CS or SWE');
      }

      const database = await readDatabase('database.csv');

      if (!database || !Array.isArray(database)) {
        throw new Error('Cannot load database');
      }

      const studentsList = [];

      database.forEach((student) => {
        if (student.field.toUpperCase() === major.toUpperCase()) {
          studentsList.push(student.firstname);
        }
      });

      const responseText = `List: ${studentsList.join(', ')}`;
      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
